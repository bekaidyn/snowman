import InputChipContainer from 'components/InputChip/InputChip.Container';
import { InputChipOwnProps } from 'components/InputChip/InputChipProps';
import { createInputChipStore } from 'components/InputChip/store/InputChipStore';
import { InputChipModel } from 'components/InputChip/types/InputChipModel';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { SnowmanAction } from 'types/SnowmanAction';

class InputChip extends Component<InputChipOwnProps> {
  store: Store<InputChipModel, SnowmanAction>;

  constructor(props: InputChipOwnProps) {
    super(props);
    this.store = createInputChipStore(props.instanceDescriptor);
  }

  render(): JSX.Element {
    return (
      <Provider store={this.store}>
        <InputChipContainer {...this.props} />
      </Provider>
    );
  }
}

export default InputChip;
