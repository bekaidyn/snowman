import {
  Algorithm,
  AlgorithmApi,
  Dataset,
  DatasetsApi,
  Experiment,
  ExperimentsApi,
} from 'api';
import { SnowmanAppDispatch } from 'apps/SnowmanApp/store/SnowmanAppStore';
import { CentralResourcesActionTypes } from 'apps/SnowmanApp/types/CentralResourcesActionTypes';
import { SnowmanAppModel } from 'apps/SnowmanApp/types/SnowmanAppModel';
import { SnowmanAction } from 'types/SnowmanAction';
import { SnowmanDispatch } from 'types/SnowmanDispatch';
import { SnowmanThunkAction } from 'types/SnowmanThunkAction';
import RequestHandler from 'utils/requestHandler';

export const refreshCentralResources = (): SnowmanThunkAction<
  Promise<void>,
  SnowmanAppModel
> => (dispatch: SnowmanDispatch<SnowmanAppModel>): Promise<void> =>
  Promise.all([
    dispatch(getAlgorithms()).then(),
    dispatch(getDatasets()).then(),
    dispatch(getExperiments()).then(),
  ]).then();

export const doRefreshCentralResources = (): Promise<void> =>
  SnowmanAppDispatch(refreshCentralResources());

export const getAlgorithms = (): SnowmanThunkAction<
  Promise<void>,
  SnowmanAppModel
> => async (dispatch: SnowmanDispatch<SnowmanAppModel>): Promise<void> =>
  RequestHandler<void>(() =>
    new AlgorithmApi()
      .getAlgorithms()
      .then(
        (algorithms: Algorithm[]): SnowmanAction =>
          dispatch({
            type: CentralResourcesActionTypes.STORE_ALGORITHMS,
            payload: algorithms,
          })
      )
      .then()
  );

export const getDatasets = (): SnowmanThunkAction<
  Promise<void>,
  SnowmanAppModel
> => async (dispatch: SnowmanDispatch<SnowmanAppModel>): Promise<void> =>
  RequestHandler<void>(() =>
    new DatasetsApi()
      .getDatasets()
      .then(
        (datasets: Dataset[]): SnowmanAction =>
          dispatch({
            type: CentralResourcesActionTypes.STORE_DATASETS,
            payload: datasets,
          })
      )
      .then()
  );

export const getExperiments = (): SnowmanThunkAction<
  Promise<void>,
  SnowmanAppModel
> => async (dispatch: SnowmanDispatch<SnowmanAppModel>): Promise<void> =>
  RequestHandler<void>(() =>
    new ExperimentsApi()
      .getExperiments()
      .then(
        (experiments: Experiment[]): SnowmanAction =>
          dispatch({
            type: CentralResourcesActionTypes.STORE_EXPERIMENTS,
            payload: experiments,
          })
      )
      .then()
  );
