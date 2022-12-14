export const filterBy = <EntityModel, FilterByModel>({
  currentSelection,
  filterBy,
  entityToFilteredEntity,
}: {
  currentSelection: (EntityModel | undefined)[];
  filterBy: (FilterByModel | undefined)[];
  entityToFilteredEntity: (
    entity: EntityModel | undefined
  ) => FilterByModel | undefined;
}): (EntityModel | undefined)[] =>
  currentSelection
    .map(
      (entity) =>
        [entity, entityToFilteredEntity(entity)] as [
          EntityModel | undefined,
          FilterByModel | undefined
        ]
    )
    .filter(
      ([_, entityFilter]) =>
        entityFilter !== undefined && filterBy.includes(entityFilter)
    )
    .map(([entity]) => entity);

export const resolveEntity = <Entity>(
  id: number | undefined,
  entities: Record<number, Entity>
): Entity | undefined => (id !== undefined ? entities[id] : undefined);
