import 'dotenv/config';

/**
 * @Core application info
 * Every identification with regards to application
 */

export default {
  name: process.env.APPLICATION_NAME,
  version: process.env.APPLICATION_VERSION,
  port: process.env.APPLICATION_PORT || 3333,
  env: process.env.NODE_ENV || 'development',
};
