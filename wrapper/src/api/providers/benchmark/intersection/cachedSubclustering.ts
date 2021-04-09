import {
  DatasetId,
  ExperimentId,
  SimilarityThresholdFunctionId,
} from '../../../server/types';
import { LazyProperty } from '../../../tools/lazyProperty';
import { Subclustering } from '../cluster/subclustering';
import { IntersectionCache } from './cache';

export class CachedSubclusting {
  protected readonly _clustering = new LazyProperty(
    () =>
      new Subclustering(
        IntersectionCache.get(
          this.datasetId,
          this.base,
          this.baseSimilarityThresholds,
          this.baseSimilarityFunctions,
          [],
          [],
          []
        ).clustering,
        IntersectionCache.get(
          this.datasetId,
          this.partition,
          this.partitionSimilarityThresholds,
          this.partitionSimilarityFunctions,
          [],
          [],
          []
        ).clustering
      )
  );
  constructor(
    protected readonly base: ExperimentId[],
    protected readonly partition: ExperimentId[],
    protected readonly datasetId: [DatasetId],
    protected readonly baseSimilarityThresholds: (number | undefined)[],
    protected readonly baseSimilarityFunctions: (
      | SimilarityThresholdFunctionId
      | undefined
    )[],
    protected readonly partitionSimilarityThresholds: (number | undefined)[],
    protected readonly partitionSimilarityFunctions: (
      | SimilarityThresholdFunctionId
      | undefined
    )[]
  ) {}

  static entangledConstructorParameters = [
    {
      sortBy: 0,
      toSort: [0, 3, 4],
    },
    {
      sortBy: 1,
      toSort: [1, 5, 6],
    },
  ];

  get clustering(): Subclustering {
    return this._clustering.value;
  }
}
