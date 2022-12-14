import { MakeOptional } from 'snowman-library';
import { dirSync } from 'tmp';

import { setupDatabase, SetupOptions } from '../../setup';
import { loadOrCreateMainDatabase } from '../../setup/backend';
import { latest } from '.';
import { SchemaVersion } from './schemaVersion';
abstract class TestSchemaVersion extends SchemaVersion {
  abstract readonly predecessor?: TestSchemaVersion;
  migrated = false;
  protected async migrateFromLastVersion(): Promise<void> {
    this.migrated = true;
  }
  migrate(
    fromVersion: number,
    {
      appPath,
      loadExampleEntries = false,
      prebuiltAppPath = '',
      temporary = true,
      usePreBuiltDatabase = false,
    }: MakeOptional<SetupOptions> & { appPath: string }
  ) {
    return super.migrate(fromVersion, {
      appPath,
      loadExampleEntries,
      prebuiltAppPath,
      temporary,
      usePreBuiltDatabase,
    });
  }
  reset() {
    this.migrated = false;
    this.predecessor?.reset();
  }
}

const TestSchemaV0 = new (class extends TestSchemaVersion {
  predecessor = undefined;
})();
const TestSchemaV1 = new (class extends TestSchemaVersion {
  predecessor = TestSchemaV0;
})();
const TestSchemaV2 = new (class extends TestSchemaVersion {
  predecessor = TestSchemaV1;
})();

describe('SchemaVersion', () => {
  let tmpAppDir: string;
  beforeEach(() => {
    tmpAppDir = dirSync({
      unsafeCleanup: true,
    }).name;
    loadOrCreateMainDatabase(true);
    TestSchemaV2.reset();
  });
  describe('migrates correctly', () => {
    test('from v0', async () => {
      await TestSchemaV2.migrate(0, { appPath: tmpAppDir });
      expect(TestSchemaV0.migrated).toBeFalsy();
      expect(TestSchemaV1.migrated).toBeTruthy();
      expect(TestSchemaV2.migrated).toBeTruthy();
    });
    test('from v1', async () => {
      await TestSchemaV2.migrate(1, { appPath: tmpAppDir });
      expect(TestSchemaV0.migrated).toBeFalsy();
      expect(TestSchemaV1.migrated).toBeFalsy();
      expect(TestSchemaV2.migrated).toBeTruthy();
    });
    test('from v2', async () => {
      await TestSchemaV2.migrate(2, { appPath: tmpAppDir });
      expect(TestSchemaV0.migrated).toBeFalsy();
      expect(TestSchemaV1.migrated).toBeFalsy();
      expect(TestSchemaV2.migrated).toBeFalsy();
    });
  });
  describe('version stored correctly', () => {
    test('initial version is 0', () => {
      expect(TestSchemaVersion.getInstalledVersion(tmpAppDir)).toEqual(0);
    });
    test('keeps version 0', async () => {
      await TestSchemaV0.migrate(
        TestSchemaVersion.getInstalledVersion(tmpAppDir),
        { appPath: tmpAppDir }
      );
      expect(TestSchemaVersion.getInstalledVersion(tmpAppDir)).toEqual(
        TestSchemaV0.version
      );
    });
    test('updates to version 1', async () => {
      await TestSchemaV1.migrate(
        TestSchemaVersion.getInstalledVersion(tmpAppDir),
        { appPath: tmpAppDir }
      );
      expect(TestSchemaVersion.getInstalledVersion(tmpAppDir)).toEqual(
        TestSchemaV1.version
      );
    });
    test('updates to version 2', async () => {
      await TestSchemaV2.migrate(
        TestSchemaVersion.getInstalledVersion(tmpAppDir),
        { appPath: tmpAppDir }
      );
      expect(TestSchemaVersion.getInstalledVersion(tmpAppDir)).toEqual(
        TestSchemaV2.version
      );
    });
  });
  test('throws error when cannot upgrade from version', async () => {
    await expect(
      async () =>
        await TestSchemaV0.migrate(TestSchemaV2.version, { appPath: tmpAppDir })
    ).rejects.toThrowError();
  });

  describe('database setup', () => {
    beforeEach(async () => {
      await setupDatabase({
        temporary: false,
        appPath: tmpAppDir,
        loadExampleEntries: false,
      });
    });
    test('sets latest database version', () => {
      expect(SchemaVersion.getInstalledVersion(tmpAppDir)).toEqual(
        latest.version
      );
    });
  });
});
