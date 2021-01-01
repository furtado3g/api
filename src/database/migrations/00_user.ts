import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.string("username", 30).notNullable();
    table.string("password").notNullable();
    table.string("name").notNullable();
    table.date("birthday").notNullable();
    table.string("description");
    table
      .integer("user_type")
      .references("id")
      .inTable("user_type")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("users");
}
