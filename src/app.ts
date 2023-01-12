import express, { Express } from 'express';
import { UnidevServer } from './setupServer';

class Application {
  public initialize(): void {
    const app: Express = express();
    const server: UnidevServer = new UnidevServer(app);
    server.start();
  }
}

const application: Application = new Application();
application.initialize();
