/* eslint-disable no-undef */

import { type Knex } from 'knex';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async function (knex: Knex) {
  try {
    await knex.raw(`
      CREATE TABLE endpoint_data (
          id SERIAL PRIMARY KEY,
          endpoint_name VARCHAR(255) NOT NULL,
          request_method VARCHAR(10) NOT NULL,
          request_body JSONB,
          response_body JSONB,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT current_timestamp
      );

    `);
  } catch (error) {
    console.log(error);
  }
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async function (knex: Knex) {
  await knex.raw(`
    DROP TABLE IF EXISTS endpoint_data;
    `);
};
