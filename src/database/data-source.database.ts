import 'reflect-metadata';
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD, DB_SYNCHRONIZE } =
  process.env;

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: DB_HOST || 'localhost',
  port: parseInt(DB_PORT) || 5432,
  username: DB_USER || '',
  password: DB_PASSWORD || '',
  database: DB_NAME || '',
  synchronize: Boolean(DB_SYNCHRONIZE) || true,
  logging: true,
  migrations: ['src/migrations/*{.ts,.js}'],
});
