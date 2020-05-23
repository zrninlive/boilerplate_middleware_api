import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';

import swaggerDoc from '../swaggerDoc';
import exampleRouter from './example.routes';

const routes = Router();

routes.use('/example', exampleRouter);

routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

export default routes;
