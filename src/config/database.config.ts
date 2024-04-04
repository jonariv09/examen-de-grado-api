const DatabaseConfig = () => ({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT) || 5432,
  database: process.env.DB_NAME || '',
  username: process.env.DB_USER || '',
  password: process.env.DB_PASSWORD || '',
  entities: ['src/**/*.entity{.ts,.js}'],
  synchronize: process.env.DB_SYNCHRONIZE || false,
  migrationsTableName: 'migrations',
  migrations: ['src/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
});

export default DatabaseConfig;
