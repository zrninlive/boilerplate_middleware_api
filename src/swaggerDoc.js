import swaggerJsDoc from 'swagger-jsdoc';
import applicationInfo from './config/core';

const options = {
  definition: {
    info: {
      title: `🐎  ${applicationInfo.name}`,
      version: applicationInfo.version,
      description:
        'API criada para ser um middleware entre aplicações da ABQM e aplicações desenvolvidas pela iClouds',
    },
  },
  apis: ['src/routes/*.js'],
};

const specs = swaggerJsDoc(options);
export default specs;
