import DatabaseConfig from './database.config';
const AppConfig = () => ({
  environment: process.env.NODE_ENVIRONMENT
    ? process.env.NODE_ENVIRONMENT
    : 'development',
  port: 3000,
  database: {
    ...DatabaseConfig(),
  },
});

export default AppConfig;
