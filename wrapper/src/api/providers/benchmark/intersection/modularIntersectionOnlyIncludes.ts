import { LazyProperty } from '../../../tools/lazyProperty';
import { SubclusterCache } from '../cache';
import { Clustering } from '../cluster/types';
import { IntersectionOnlyIncludes } from './intersectionOnlyIncludes';

export class ModularIntersectionOnlyIncludes extends IntersectionOnlyIncludes {
  protected splitIndex = new LazyProperty(() => {
    let splitIndex =
      this.config.included.findIndex(({ similarity }) => similarity) + 1;
    if (splitIndex === 0 || splitIndex === this.config.included.length) {
      splitIndex = Math.floor(this.config.included.length / 2);
    }
    return splitIndex;
  });

  get clustering(): Clustering {
    return SubclusterCache.get({
      datasetId: this.config.datasetId,
      base: this.config.included.slice(0, this.splitIndex.value),
      partition: this.config.included.slice(this.splitIndex.value),
      forceStatic: this.config.forceStatic,
    }).clustering;
  }

  protected readonly _numberPairs = new LazyProperty(
    () => this.clustering.numberPairs
  );
  get numberPairs(): number {
    return this._numberPairs.value;
  }

  protected readonly _numberRows = new LazyProperty(
    () => this.clustering.numberRows
  );
  get numberRows(): number {
    return this._numberRows.value;
  }
}
