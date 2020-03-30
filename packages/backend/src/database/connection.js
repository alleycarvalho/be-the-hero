const knex = require('knex');
const configuration = require('../../knexfile');

const config = process.env.NODE_ENV === 'testing'
  ? configuration.testing
  : configuration.development;

const connection = knex(config);

module.exports = connection;
