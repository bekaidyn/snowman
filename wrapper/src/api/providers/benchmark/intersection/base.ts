import {
  DatasetId,
  ExperimentId,
  SimilarityThresholdFunctionId,
} from '../../../server/types';
import { LazyProperty } from '../../../tools/lazyProperty';
import { providers } from '../..';
import { Clustering } from '../cluster/types';
import { UnionFind } from '../cluster/unionFind';
import type { Intersection as IntersectionSubclass } from '.';
import { IntersectionCache, SubclusterCache } from './cache';
import { IntersectionQueries } from './queries';

export class IntersectionBase {
  get clustering(): Clustering {
    return this._clustering.value;
  }

  protected readonly _clustering = new LazyProperty<Clustering>(() =>
    this.createClustering()
  );

  protected readonly queries = new IntersectionQueries();

  constructor(
    public readonly predictedConditionPositive: ExperimentId[],
    public readonly predictedConditionNegative: ExperimentId[],
    public readonly datasetId: [DatasetId],
    public readonly positiveSimilarityThresholds: (number | undefined)[],
    public readonly positiveSimilarityFunctions: (
      | SimilarityThresholdFunctionId
      | undefined
    )[],
    public readonly negativeSimilarityThresholds: (number | undefined)[],
    public readonly negativeSimilarityFunctions: (
      | SimilarityThresholdFunctionId
      | undefined
    )[]
  ) {}

  get positiveIntersection(): IntersectionSubclass {
    return IntersectionCache.get(
      this.predictedConditionPositive,
      [],
      this.datasetId,
      this.positiveSimilarityThresholds,
      this.positiveSimilarityFunctions,
      [],
      []
    );
  }

  get negativeIntersection(): IntersectionSubclass {
    return IntersectionCache.get(
      this.predictedConditionNegative,
      [],
      this.datasetId,
      this.negativeSimilarityThresholds,
      this.negativeSimilarityFunctions,
      [],
      []
    );
  }

  protected createClustering(): Clustering {
    if (this.predictedConditionNegative.length > 0) {
      throw new Error(
        'Creating a clustering which excludes experiments is not supported.'
      );
    }
    const numberOfRecords = providers.dataset.getDataset(this.datasetId[0])
      .numberOfRecords;
    if (numberOfRecords === undefined) {
      throw new Error('The dataset does not specify number of records.');
    }
    if (this.predictedConditionPositive.length === 0) {
      const clustering = new UnionFind(numberOfRecords);
      for (let index = 1; index < numberOfRecords; index++) {
        clustering.link([[index, index - 1]]);
      }
      return clustering;
    } else if (this.predictedConditionPositive.length === 1) {
      return new UnionFind(numberOfRecords).link(
        this.queries.experimentLinks(this.predictedConditionPositive[0])
      );
    } else {
      const splitIndex = Math.floor(this.predictedConditionPositive.length / 2);
      return SubclusterCache.get(
        this.predictedConditionPositive.slice(0, splitIndex),
        this.predictedConditionPositive.slice(splitIndex),
        this.datasetId,
        this.positiveSimilarityThresholds.slice(0, splitIndex),
        this.positiveSimilarityFunctions.slice(0, splitIndex),
        this.positiveSimilarityThresholds.slice(splitIndex),
        this.positiveSimilarityFunctions.slice(splitIndex)
      ).clustering;
    }
  }
}
