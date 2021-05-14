import { Algorithm } from 'api';
import DecisionMatrixStrategyView from 'apps/BenchmarkApp/strategies/DecisionMatrixStrategy/DecisionMatrixStrategy.View';
import { DecisionMatrixStrategyStateProps } from 'apps/BenchmarkApp/strategies/DecisionMatrixStrategy/DecisionMatrixStrategyProps';
import { DecisionMatrixStrategyModel } from 'apps/BenchmarkApp/strategies/DecisionMatrixStrategy/types/DecisionMatrixStrategyModel';
import { connect } from 'react-redux';

const mapStateToProps = (
  state: DecisionMatrixStrategyModel
): DecisionMatrixStrategyStateProps => ({
  isValidConfig: state.isValidConfig,
  selectedAlgorithms: state.enhancedAlgorithms.map(
    (anEAlgo): Algorithm => anEAlgo.algorithm
  ),
  averageMetrics: state.averageMetrics,
});

const DecisionMatrixStrategyContainer = connect(mapStateToProps)(
  DecisionMatrixStrategyView
);

export default DecisionMatrixStrategyContainer;
