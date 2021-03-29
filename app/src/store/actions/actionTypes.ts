export const RenderStoreActionTypes = {
  NAVIGATE_TO: 'RENDER_STORE_ACTION-NAVIGATE_TO',
  NAVIGATE_NEXT: 'RENDER_STORE_ACTION-NAVIGATE_NEXT',
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
  CHANGE_SOFT_KPI_TIME_TO_CONFIGURE:
    'ADD_EXPERIMENT_DIALOG_STORE_ACTION-CHANGE_SOFT_KPI_TIME_TO_CONFIGURE',
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
  CHANGE_SOFT_KPI_IMPLEMENTATION_KNOW_HOW_LEVEL:
    'ALGORITHM_DIALOG_STORE-CHANGE_SOFT_KPI_IMPLEMENTATION_KNOW_HOW_LEVEL',
  CHANGE_SOFT_KPI_MATCHING_SOLUTION_TYPE:
    'ALGORITHM_DIALOG_STORE-CHANGE_SOFT_KPI_MATCHING_SOLUTION_TYPE',
  CHANGE_SOFT_KPI_TIME_TO_INSTALL:
    'ALGORITHM_DIALOG_STORE-CHANGE_SOFT_KPI_TIME_TO_INSTALL',
  CHANGE_SOFT_KPI_TIME_TO_CONFIGURE:
    'ALGORITHM_DIALOG_STORE-CHANGE_SOFT_KPI_TIME_TO_CONFIGURE',
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

export const SelectableInputStoreActionTypes = {
  SHOW_POPOVER: 'SELECTABLE_INPUT_STORE-SHOW_POPOVER',
  CLOSE_POPOVER: 'SELECTABLE_INPUT_STORE-CLOSE_POPOVER',
  CHANGE_SEARCH_STRING: 'SELECTABLE_INPUT_STORE-CHANGE_SEARCH_STRING',
  RESET_COMPONENT: 'SELECTABLE_INPUT_STORE-RESET_COMPONENT',
};

export const DatasetsPageActionTypes = {
  CLICK_ON_DATASET: 'DATASETS_PAGE-CLICK_ON_DATASET',
  CLICK_ON_DATASET_CATEGORY: 'DATASETS_PAGE-CLICK_ON_DATASET_TAG',
};

export const ExperimentsPageActionTypes = {
  CLICK_ON_MATCHING_SOLUTION:
    'EXPERIMENTS_PAGE-CLICK_ON_CLICK_ON_MATCHING_SOLUTION',
  DRAG_N_DROP_EXPERIMENT: 'EXPERIMENTS_PAGE-DRAG_N_DROP_EXPERIMENT',
  CLICK_ON_EXPERIMENTS_FILTER_TOOL:
    'EXPERIMENTS_PAGE-CLICK_ON_EXPERIMENTS_FILTER_TOOL',
};

export const IntersectionStoreActionTypes = {
  RESET_INTERSECTION: 'EXPERIMENT_INTERSECTION_STORE-RESET_INTERSECTION',
  INCLUDE_EXPERIMENT: 'EXPERIMENT_INTERSECTION_STORE-INCLUDE_EXPERIMENT',
  EXCLUDE_EXPERIMENT: 'EXPERIMENT_INTERSECTION_STORE-EXCLUDE_EXPERIMENT',
  IGNORE_EXPERIMENT: 'EXPERIMENT_INTERSECTION_STORE-IGNORE_EXPERIMENT',
  SET_COUNTS: 'EXPERIMENT_INTERSECTION_STORE-SET_COUNTS',
};

export const BinaryMetricsStoreActionTypes = {
  SET_ALL_METRICS: 'BINARY_METRICS_STORE-SET_ALL_METRICS',
  SET_ALL_COUNTS: 'BINARY_METRICS_STORE-SET_ALL_COUNTS',
  CLICK_ON_PANE: 'BINARY_METRICS_STORE-CLICK_ON_PANE',
  RESET_METRICS: 'BINARY_METRICS_STORE-RESET_METRICS',
};

export const NMetricsPageActionTypes = {
  SET_ALL_METRICS: 'N_METRICS_STORE-SET_ALL_METRICS',
  INSPECT_AN_EXPERIMENT: 'N_METRICS_STORE-INSPECT_AN_EXPERIMENT',
  RESET_METRICS: 'N_METRICS_STORE-RESET_METRICS',
};

export const CoreStoreActionTypes = {
  SET_ALL_ALGORITHMS: 'CORE_STORE_ACTION-SET_ALL_ALGORITHMS',
  SET_ALL_DATASETS: 'CORE_STORE_ACTION-SET_ALL_DATASETS',
  SET_ALL_EXPERIMENTS: 'CORE_STORE-SET_ALL_EXPERIMENTS',
};
