import { BenchmarkApi, Metric } from 'api';
import { DecisionMatrixStrategyActionTypes } from 'apps/BenchmarkApp/strategies/DecisionMatrixStrategy/types/DecisionMatrixStrategyActionTypes';
import { DecisionMatrixStrategyModel } from 'apps/BenchmarkApp/strategies/DecisionMatrixStrategy/types/DecisionMatrixStrategyModel';
import { BenchmarkAppModel } from 'apps/BenchmarkApp/types/BenchmarkAppModel';
import { MagicNotPossibleId } from 'structs/constants';
import { SnowmanDispatch } from 'types/SnowmanDispatch';
import { SnowmanThunkAction } from 'types/SnowmanThunkAction';
import {
  easyPrimitiveAction,
  easyPrimitiveActionReturn,
} from 'utils/easyActionsFactory';
import RequestHandler from 'utils/requestHandler';

export const updateConfig = (
  benchmarkConfig: BenchmarkAppModel
): easyPrimitiveActionReturn<DecisionMatrixStrategyModel> =>
  easyPrimitiveAction<DecisionMatrixStrategyModel>({
    type: DecisionMatrixStrategyActionTypes.UPDATE_CONFIG,
    payload: benchmarkConfig,
  });

export const setMetrics = (
  metrics: Metric[][]
): easyPrimitiveActionReturn<DecisionMatrixStrategyModel> =>
  easyPrimitiveAction<DecisionMatrixStrategyModel>({
    type: DecisionMatrixStrategyActionTypes.SET_METRICS,
    payload: metrics,
  });

export const loadMetrics = (): SnowmanThunkAction<
  void,
  DecisionMatrixStrategyModel
> => (
  dispatch: SnowmanDispatch<DecisionMatrixStrategyModel>,
  getState: () => DecisionMatrixStrategyModel
): Promise<void> => {
  if (!getState().isValidConfig) return Promise.resolve();
  return Promise.all(
    getState().metricEntities.map(
      (anItem): Promise<Metric[]> =>
        RequestHandler(() =>
          new BenchmarkApi().getBinaryMetrics({
            groundTruthExperimentId: anItem.groundTruthId ?? MagicNotPossibleId,
            predictedSimilarityThresholdFunction:
              anItem.experiment.similarity?.func.id,
            predictedSimilarityThreshold:
              anItem.experiment.similarity?.threshold,
            predictedExperimentId:
              anItem.experiment?.experiment.id ?? MagicNotPossibleId,
          })
        )
    )
  ).then((metrics) => dispatch(setMetrics(metrics)));
};

export const loadStrategyData = (
  dispatch: SnowmanDispatch<DecisionMatrixStrategyModel>,
  appStore: BenchmarkAppModel
): void => {
  dispatch(updateConfig(appStore));
  dispatch(loadMetrics());
};
