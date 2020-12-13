import Knex from "knex";
const db = Knex({
  client: "pg",
  version: "7.2",
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: 'Therev a7x',
    database: 'poesias',
    /* ssl: {
      rejectUnauthorized: false,
    }, */
  },
});

export default db;