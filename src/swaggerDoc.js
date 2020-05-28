import swaggerJsDoc from 'swagger-jsdoc';
import applicationInfo from './config/core';

const options = {
  definition: {
    info: {
      title: ` ${applicationInfo.name}`,
      version: applicationInfo.version,
      description: applicationInfo.description,
    },
  },
  apis: ['src/routes/*.js'],
};

const specs = swaggerJsDoc(options);
export default specs;
