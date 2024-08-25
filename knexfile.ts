/* eslint-disable no-undef */
const envPath = `.env.${process.env["NEXT_ENV"] ?? 'development'}`
import * as dotenv from "dotenv";

console.log({envPath});
dotenv.config({
  path: envPath,
});

const dbConfig = {
  client: 'pg',
  connection: process.env.DB_DATABASE_URL,
  pool: {
    min: 2,
    max: 5,
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './src/migrations',
  },
  seeds: {
    directory: './src/seeds',
  },
  log: {
    debug: console.log,
    error: console.log,
  },
  // debug: true,
}

export default dbConfig;