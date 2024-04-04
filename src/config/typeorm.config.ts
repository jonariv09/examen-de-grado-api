import { DataSourceOptions } from 'typeorm';
import DatabaseConfig from './database.config';
import * as dotenv from 'dotenv';

dotenv.config();
const TypeormConfig = DatabaseConfig() as DataSourceOptions;

export default TypeormConfig;
