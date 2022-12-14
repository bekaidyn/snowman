import { setupDatabase } from './database';
import { APIServer } from './server/apiServer';
import { cliArgs, doNotStartApplication } from './tools/cli';
import { logger } from './tools/logger';

async function launch(): Promise<void> {
  if (cliArgs.inMemory) {
    logger.info(`Using in memory database`);
  } else {
    logger.info(`Using storage directory ${cliArgs.storageDirectory}`);
  }
  logger.info('Preparing database...');
  await setupDatabase({
    temporary: cliArgs.inMemory,
    appPath: cliArgs.storageDirectory,
    loadExampleEntries: true,
    usePreBuiltDatabase: true,
  });
  logger.info('Starting webserver...');
  APIServer.launch();
  logger.info('Ready');
}

if (!doNotStartApplication) {
  launch().catch((e) => {
    if (e instanceof Error) {
      logger.error(e.message, {
        name: e.name,
        stack: e.stack,
      });
    } else {
      logger.error(e);
    }
  });
}
