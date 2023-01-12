import express, { Express } from 'express';
import { UnidevServer } from './setupServer';
import databaseConnection from './setupDatabase';

class Application {
  public initialize(): void {
    databaseConnection();
    const app: Express = express();
    const server: UnidevServer = new UnidevServer(app);
    server.start();
  }
}

const application: Application = new Application();
application.initialize();
