import ExperimentDroppableView from 'components/ExperimentDroppable/ExperimentDroppable.View';
import {
  ExperimentDroppableOwnProps,
  ExperimentDroppableStateProps,
} from 'components/ExperimentDroppable/ExperimentDroppableProps';
import { connect } from 'react-redux';
import { ImmediateStore } from 'store/models';
import {
  getExperimentBucketFromId,
  isExperimentBucketDisabledFromId,
} from 'store/reducers/BenchmarkConfiguratorReducer';

const mapStateToProps = (
  state: ImmediateStore,
  ownProps: ExperimentDroppableOwnProps
): ExperimentDroppableStateProps => ({
  bucketContent: getExperimentBucketFromId(
    state.BenchmarkConfigurationStore,
    ownProps.bucketId
  ),
  isDropDisabled: isExperimentBucketDisabledFromId(
    state.BenchmarkConfigurationStore,
    ownProps.bucketId
  ),
});

const ExperimentDroppable = connect(mapStateToProps)(ExperimentDroppableView);

export default ExperimentDroppable;
