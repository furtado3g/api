import path from "path";
module.exports = {
  client: "pg",
  version: "7.2",
  connection: {
    host: process.env.DATABASE_HOST || "127.0.0.1",
    user: process.env.DATABASE_USER || "postgres",
    password: process.env.DATABASE_PSW || "Therev a7x",
    database: process.env.DATABASE_NAME || "poetry",
    ssl: {
      rejectUnauthorized: false,
    },
  },
  migrations: {
    directory: path.resolve(__dirname, "src", "databases", "migrations"),
  },
};
