import app from './app';

import applicationConfig from './config/core';

app.listen(applicationConfig.port, () => {
  console.log(`🚀 ${applicationConfig.name}`);
  console.log(`Running at port: ${applicationConfig.port}`);
  console.log(`Enviroment: ${applicationConfig.env}`);
  console.log(`Version: ${applicationConfig.version}`);
});
