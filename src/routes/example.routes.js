import { Router } from 'express';

import exampleController from '../controllers/exampleController';

const exampleRoutes = Router();

/**
 * @swagger
 * tags:
 *   - name: User
 *     description: Example Swagger Documentation
 */

/**
 * @swagger
 * definitions:
 *   User:
 *     type: object
 *     required:
 *       - username
 *       - email
 *       - name
 *     properties:
 *       username:
 *         type: string
 *       name:
 *         type: string
 *       email:
 *         type: string
 *         format: email
 */

/**
 * @swagger
 * /example:
 *   get:
 *     description: Returns users
 *     tags: [User]
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: users
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/User'
 */
exampleRoutes.get('/', exampleController.index);

export default exampleRoutes;
