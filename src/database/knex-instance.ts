/* eslint-disable no-undef */
import config from '@/config/config';
import knex from 'knex';
import pg from 'pg';

pg?.types.setTypeParser(pg?.types.builtins.NUMERIC, (value: string) => {
  return parseFloat(value);
});

const dbConfig = {
  client: 'pg',
  connection: config.backend.db.url,
  pool: {
    min: 2,
    max: 5,
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: '../migrations',
  },
  log: {
    debug: console.log,
    error: console.log,
  },
  // debug: true,
}

export const knexInstance = knex(dbConfig);

export default dbConfig;