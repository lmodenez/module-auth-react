module.exports = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  logging: false,
  entities: ['api/app/models/*.ts'],
  migrations: ['api/database/migrations/*.ts'],
  cli: {
    migrationsDir: 'api/database/migrations',
  },
};
