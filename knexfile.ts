import path from "path";
module.exports = {
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
  migrations: {
    directory: path.resolve(__dirname, "src", "database", "migrations"),
  },
};
