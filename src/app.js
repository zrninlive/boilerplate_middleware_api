import 'dotenv/config';
import 'express-async-errors';
import express from 'express';
import cors from 'cors';

import logger from './middlewares/logger';
import { handleErrors } from './errors';

import routes from './routes';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(logger);
  }

  routes() {
    this.server.use(routes);
    this.server.use(handleErrors);
  }
}

export default new App().server;
