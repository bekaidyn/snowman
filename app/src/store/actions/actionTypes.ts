export const DatasetStoreActionTypes = {
  CLICK_ON_DATASET: 'DATASET_STORE_ACTION-CLICK_ON_DATASET',
  CLICK_ON_DATASET_TAG: 'DATASET_STORE_ACTION-CLICK_ON_DATASET_TAG',
  SET_ALL_DATASETS: 'DATASET_STORE_ACTION-SET_ALL_DATASETS',
  RESET_SELECTED_DATASET: 'DATASET_STORE_ACTION-RESET_SELECTED_DATASET',
};

export const DatasetDialogStoreActionTypes = {
  OPEN_ADD_DIALOG: 'ADD_DATASET_DIALOG_STORE_ACTION-OPEN_ADD_DIALOG',
  OPEN_CHANGE_DIALOG: 'ADD_DATASET_DIALOG_STORE_ACTION-OPEN_CHANGE_DIALOG',
  CLOSE_DIALOG: 'ADD_DATASET_DIALOG_STORE_ACTION-CLOSE_DIALOG',
  RESET_DIALOG: 'ADD_DATASET_DIALOG_STORE_ACTION-RESET_DIALOG',
  LOAD_AVAILABLE_TAGS: 'ADD_DATASET_DIALOG_STORE_ACTION-LOAD_AVAILABLE_TAGS',
  CHANGE_DATASET_NAME: 'ADD_DATASET_DIALOG_STORE_ACTION-CHANGE_DATASET_NAME',
  CHANGE_DATASET_DESCRIPTION:
    'ADD_DATASET_DIALOG_STORE_ACTION-CHANGE_DATASET_DESCRIPTION',
  CHANGE_DATASET_TYPE: 'ADD_DATASET_DIALOG_STORE_ACTION-CHANGE_DATASET_TYPE',
  CHANGE_DATASET_FILES: 'ADD_DATASET_DIALOG_STORE_ACTION-CHANGE_DATASET_FILES',
  CHANGE_DATASET_LENGTH:
    'ADD_DATASET_DIALOG_STORE_ACTION-CHANGE_DATASET_LENGTH',
  CHANGE_CSV_ID_COLUMN: 'ADD_DATASET_DIALOG_STORE_ACTION-CHANGE_CSV_ID_COLUMN',
  CHANGE_CSV_SEPARATOR: 'ADD_DATASET_DIALOG_STORE_ACTION-CHANGE_CSV_SEPARATOR',
  CHANGE_CSV_QUOTE: 'ADD_DATASET_DIALOG_STORE_ACTION-CHANGE_CSV_QUOTE',
  CHANGE_CSV_ESCAPE: 'ADD_DATASET_DIALOG_STORE_ACTION-CHANGE_CSV_ESCAPE',
  CLICK_ON_DATASET_TAG: 'ADD_DATASET_DIALOG_STORE_ACTION-CLICK_ON_DATASET_TAG',
  ADD_DATASET_TAG: 'ADD_DATASET_DIALOG_STORE_ACTION-ADD_DATASET_TAG',
};

export const AlgorithmsStoreActionTypes = {
  SET_ALL_ALGORITHMS: 'ALGORITHMS_STORE_ACTION-SET_ALL_ALGORITHMS',
};

export const ExperimentDialogStoreActionTypes = {
  OPEN_ADD_DIALOG: 'ADD_EXPERIMENT_DIALOG_STORE_ACTION-OPEN_ADD_DIALOG',
  OPEN_CHANGE_DIALOG: '',
  CLOSE_DIALOG: 'ADD_EXPERIMENT_DIALOG_STORE_ACTION-CLOSE_DIALOG',
  CHANGE_EXPERIMENT_NAME:
    'ADD_EXPERIMENT_DIALOG_STORE_ACTION-CHANGE_EXPERIMENT_NAME',
  CHANGE_EXPERIMENT_DESCRIPTION:
    'ADD_EXPERIMENT_DIALOG_STORE_ACTION-CHANGE_EXPERIMENT_DESCRIPTION',
  CHANGE_EXPERIMENT_FORMAT:
    'ADD_EXPERIMENT_DIALOG_STORE_ACTION-CHANGE_EXPERIMENT_FORMAT',
  CHANGE_SELECTED_FILES:
    'ADD_EXPERIMENT_DIALOG_STORE_ACTION-CHANGE_SELECTED_FILES',
  RESET_DIALOG: 'ADD_EXPERIMENT_DIALOG_STORE_ACTION-RESET_DIALOG',
  CLICK_ON_MATCHING_SOLUTION_TAG:
    'ADD_EXPERIMENT_DIALOG_STORE_ACTION-CLICK_ON_MATCHING_SOLUTION_TAG',
};

export const AlgorithmDialogStoreActionTypes = {
  OPEN_ADD_DIALOG: 'ALGORITHM_DIALOG_STORE-OPEN_ADD_DIALOG',
  OPEN_CHANGE_DIALOG: 'ALGORITHM_DIALOG_STORE-OPEN_CHANGE_DIALOG',
  CLOSE_DIALOG: 'ALGORITHM_DIALOG_STORE-CLOSE_DIALOG',
  CHANGE_ALGORITHM_NAME: 'ALGORITHM_DIALOG_STORE-CHANGE_ALGORITHM_NAME',
  CHANGE_ALGORITHM_DESCRIPTION:
    'ALGORITHM_DIALOG_STORE-CHANGE_ALGORITHM_DESCRIPTION',
  RESET_DIALOG: 'ALGORITHM_DIALOG_STORE-RESET_DIALOG',
};

export const GlobalIndicatorStoreActionTypes = {
  REGISTER_ONGOING_REQUEST: 'GLOBAL_INDICATOR_STORE-REGISTER_ONGOING_REQUEST',
  UNREGISTER_ONGOING_REQUEST:
    'GLOBAL_INDICATOR_STORE-UNREGISTER_ONGOING_REQUEST',
  SHOW_LOADING: 'GLOBAL_INDICATOR_STORE-SHOW_LOADING',
  HIDE_LOADING: 'GLOBAL_INDICATOR_STORE-HIDE_LOADING',
};

export const InputChipStoreActionTypes = {
  SHOW_INPUT: 'INPUT_CHIP_STORE-SHOW_INPUT',
  HIDE_INPUT: 'INPUT_CHIP_STORE-HIDE_INPUT',
  CHANGE_INPUT_VALUE: 'INPUT_CHIP_STORE-CHANGE_INPUT_VALUE',
};

export const ExperimentsStoreActionTypes = {
  CLICK_ON_TAG: 'EXPERIMENTS_STORE-CLICK_ON_TAG',
  CLICK_ON_EXPERIMENT: 'EXPERIMENTS_STORE-CLICK_ON_EXPERIMENT',
  RESET_SELECTED_EXPERIMENTS: 'EXPERIMENTS_STORE-RESET_SELECTED_EXPERIMENTS',
  SET_ALL_EXPERIMENTS: 'EXPERIMENTS_STORE-SET_ALL_EXPERIMENTS',
};

export const MetricsStoreActionTypes = {
  SET_ALL_METRICS: 'METRICS_STORE-SET_ALL_METRICS',
  SET_FALSE_POSITIVES_COUNT: 'METRICS_STORE-SET_FALSE_POSITIVES_TUPLES',
  SET_FALSE_NEGATIVES_COUNT: 'METRICS_STORE-SET_FALSE_NEGATIVES_TUPLES',
  SET_TRUE_POSITIVES_COUNT: 'METRICS_STORE-SET_TRUE_POSITIVES_TUPLES',
  CLICK_ON_PANE: 'METRICS_STORE-CLICK_ON_PANE',
  RESET_METRICS: 'METRICS_STORE-RESET_METRICS',
};

export const DataViewerStoreActionTypes = {
  RESET_DATA_VIEWER: 'DATA_VIEWER_STORE-RESET_DATA_VIEWER',
  RELOAD_TUPLES: 'DATA_VIEWER_STORE-RELOAD_TUPLES',
};
