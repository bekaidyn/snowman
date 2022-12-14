import { assertType } from 'snowman-library';

import { ForeignKeys, Schemas } from '../tools/types';

export const metaSchemas = assertType<
  Schemas<'meta', ['algorithm', 'dataset', 'experiment', 'similarityfunction']>
>()({
  meta: {
    algorithm: {
      name: 'algorithm',
      schema: 'meta',
      autoInstall: true,
      columns: {
        id: {
          name: 'id' as const,
          dataType: 'INTEGER',
          notNull: true,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          name: 'name' as const,
          dataType: 'TEXT',
          notNull: true,
        },
        description: {
          name: 'description' as const,
          dataType: 'TEXT',
        },
        installationExpertise: {
          name: 'installationExpertise' as const,
          dataType: 'REAL',
        },
        installationHrAmount: {
          name: 'installationHrAmount' as const,
          dataType: 'REAL',
        },
        deploymentType: {
          name: 'deploymentType' as const,
          dataType: 'TEXT',
        },
        solutionType: {
          name: 'solutionType' as const,
          dataType: 'TEXT',
        },
        useCase: {
          name: 'useCase' as const,
          dataType: 'TEXT',
        },
        generalCosts: {
          name: 'generalCosts' as const,
          dataType: 'REAL',
        },
        matchingSolutionExpertise: {
          name: 'matchingSolutionExpertise' as const,
          dataType: 'REAL',
        },
        matchingSolutionHrAmount: {
          name: 'matchingSolutionHrAmount' as const,
          dataType: 'REAL',
        },
        domainExpertise: {
          name: 'domainExpertise' as const,
          dataType: 'REAL',
        },
        domainHrAmount: {
          name: 'domainHrAmount' as const,
          dataType: 'REAL',
        },
        interfaces: {
          name: 'interfaces' as const,
          dataType: 'TEXT',
        },
        supportedOSs: {
          name: 'supportedOSs' as const,
          dataType: 'TEXT',
        },
      },
    },
    dataset: {
      name: 'dataset',
      schema: 'meta',
      autoInstall: true,
      columns: {
        id: {
          name: 'id' as const,
          dataType: 'INTEGER',
          notNull: true,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          name: 'name' as const,
          dataType: 'TEXT',
          notNull: true,
        },
        tags: {
          name: 'tags' as const,
          dataType: 'TEXT',
        },
        description: {
          name: 'description' as const,
          dataType: 'TEXT',
        },
        numberOfRecords: {
          name: 'numberOfRecords' as const,
          dataType: 'INTEGER',
        },
        numberOfUploadedRecords: {
          name: 'numberOfUploadedRecords' as const,
          dataType: 'INTEGER',
        },
      },
    },
    experiment: {
      name: 'experiment',
      schema: 'meta',
      autoInstall: true,
      columns: {
        id: {
          name: 'id' as const,
          dataType: 'INTEGER',
          notNull: true,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          name: 'name' as const,
          dataType: 'TEXT',
          notNull: true,
        },
        algorithm: {
          name: 'algorithm' as const,
          dataType: 'INTEGER',
          notNull: true,
          foreignKeys: (): ForeignKeys => [
            {
              table: metaSchemas.meta.algorithm,
              column: metaSchemas.meta.algorithm.columns.id,
            },
          ],
        },
        dataset: {
          name: 'dataset' as const,
          dataType: 'INTEGER',
          notNull: true,
          foreignKeys: (): ForeignKeys => [
            {
              table: metaSchemas.meta.dataset,
              column: metaSchemas.meta.dataset.columns.id,
            },
          ],
        },
        description: {
          name: 'description' as const,
          dataType: 'TEXT',
        },
        numberOfUploadedRecords: {
          name: 'numberOfUploadedRecords' as const,
          dataType: 'INTEGER',
        },
        hrAmount: {
          name: 'hrAmount' as const,
          dataType: 'REAL',
        },
        expertise: {
          name: 'expertise' as const,
          dataType: 'REAL',
        },
        runtime: {
          name: 'runtime' as const,
          dataType: 'REAL',
        },
      },
    },
    similarityfunction: {
      name: 'similarityfunction',
      schema: 'meta',
      autoInstall: true,
      columns: {
        id: {
          name: 'id',
          dataType: 'INTEGER',
          autoIncrement: true,
          notNull: true,
          primaryKey: true,
        },
        name: {
          name: 'name',
          dataType: 'TEXT',
          notNull: true,
        },
        experiment: {
          name: 'experiment',
          dataType: 'INTEGER',
          notNull: true,
          foreignKeys: (): ForeignKeys => [
            {
              table: metaSchemas.meta.experiment,
              column: metaSchemas.meta.experiment.columns.id,
            },
          ],
        },
        expression: {
          name: 'expression',
          dataType: 'TEXT',
          notNull: true,
        },
      },
    },
  },
});
