import ExperimentDialogView from 'apps/ExperimentDialog/ExperimentDialog.View';
import {
  ExperimentDialogDispatchProps,
  ExperimentDialogOwnProps,
  ExperimentDialogStateProps,
} from 'apps/ExperimentDialog/ExperimentDialogProps';
import {
  changeExperimentDescription,
  changeExperimentName,
  changeFileFormat,
  changeSelectedFiles,
  clickOnMatchingSolutionTag,
} from 'apps/ExperimentDialog/store/ExperimentDialogActions';
import { ExperimentDialogModel } from 'apps/ExperimentDialog/types/ExperimentDialogModel';
import { doCloseDialog } from 'apps/SnowmanApp/store/RenderLogicDoActions';
import { ChangeEvent } from 'react';
import { connect } from 'react-redux';
import experimentFileFormatEnum from 'types/ExperimentFileFormats';
import { IonChangeEvent } from 'types/IonChangeEvent';
import { SnowmanDispatch } from 'types/SnowmanDispatch';
import { convertFilesListToFilesArray } from 'utils/filesConverter';

const isValidExperimentDialog = (
  state: ExperimentDialogModel,
  isAddDialog = false
): boolean => {
  if (state.experimentName.length < 1 || state.selectedTags.length !== 1)
    return false;
  return !(isAddDialog && state.selectedFiles.length === 0);
};

const mapStateToProps = (
  state: ExperimentDialogModel,
  ownProps: ExperimentDialogOwnProps
): ExperimentDialogStateProps => ({
  isAddDialog: ownProps.isAddDialog,
  experimentName: state.experimentName,
  experimentDescription: state.experimentDescription,
  tags: [],
  selectedTags: state.selectedTags,
  isValidForm: isValidExperimentDialog(state, ownProps.isAddDialog),
  selectedFiles: state.selectedFiles,
  experimentFileFormat: state.experimentFileFormat,
});

const mapDispatchToProps = (
  dispatch: SnowmanDispatch<ExperimentDialogModel>
): ExperimentDialogDispatchProps => ({
  clickOnCancel: (): void => doCloseDialog(),
  changeExperimentName: (event: IonChangeEvent): void =>
    dispatch(changeExperimentName(event.detail.value as string)),
  changeExperimentDescription: (event: IonChangeEvent): void =>
    dispatch(changeExperimentDescription(event.detail.value as string)),
  changeExperimentFileFormat: (anOption: string): void =>
    dispatch(changeFileFormat(anOption as experimentFileFormatEnum)),
  clickOnMatchingSolutionTag: (aTag: string): void =>
    dispatch(clickOnMatchingSolutionTag(aTag)),
  clickOnSubmit: (): void => {
    console.log('create or update experiment');
  },
  changeSelectedFiles: (event: ChangeEvent<HTMLInputElement>): void =>
    dispatch(
      changeSelectedFiles(convertFilesListToFilesArray(event.target.files))
    ),
});

const ExperimentDialogContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExperimentDialogView);

export default ExperimentDialogContainer;
