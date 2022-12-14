import EntityItem from 'components/simple/EntityItem/EntityItem';
import {
  entityItemIcon,
  EntityItemType,
  EntityItemTypes,
  EntityOfEntityItemType,
} from 'components/simple/EntityItem/EntityItemType';
import SelectableInputFactory from 'components/stateful/SelectableInputFactory/SelectableInputFactory';
import React from 'react';
import { fuzzyStringIncludes } from 'utils/fuzzyStringIncludes';
import { GenericStoreComponentProps } from 'utils/GenericStoreComponentFactory';

export interface EntitySelectableInputOwnProps<
  EntityType extends EntityItemType
> extends GenericStoreComponentProps {
  children?: JSX.Element | JSX.Element[];
  selection: number[];
  allOptions: EntityOfEntityItemType<EntityType>[];
  allowMultiselect: boolean;
  onChange: (newSelection: number[]) => void;
}

const RawEntitySelectableInput = SelectableInputFactory<EntityItemTypes>();
const EntitySelectableInputFactory = function <
  EntityType extends EntityItemType
>(
  itemType: EntityType
): (props: EntitySelectableInputOwnProps<EntityType>) => JSX.Element {
  const EntitySelectableInput = ({
    selection,
    onChange,
    instanceDescriptor,
    ...props
  }: EntitySelectableInputOwnProps<EntityType>) => (
    <RawEntitySelectableInput
      emptyIcon={entityItemIcon[itemType]}
      selection={selection.map((id) => `${id}`)}
      onChange={(newSelection) =>
        onChange(newSelection.map((id) => parseInt(id)))
      }
      {...props}
      getID={({ id }) => `${id}`}
      matches={({ name }, search) => fuzzyStringIncludes(name, search)}
      renderChild={(entity) => (
        <EntityItem itemType={itemType} itemId={entity.id} />
      )}
      instanceDescriptor={instanceDescriptor}
    />
  );
  return EntitySelectableInput;
};

export default EntitySelectableInputFactory;
