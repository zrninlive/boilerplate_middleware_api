import app from './app';

import applicationConfig from './config/core';

app.listen(applicationConfig.port, () => {
  const domain = `${applicationConfig.host}:${applicationConfig.port}`;

  console.log(`🚀 ${applicationConfig.name}`);
  console.log(`Running at: ${domain}`);
  console.log(`Swagger documentation: ${domain}/api-docs`);
  console.log(`Enviroment: ${applicationConfig.env}`);
  console.log(`Version: ${applicationConfig.version}`);
});
