import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.string("username", 30).notNullable();
    table.string("email").notNullable();
    table.string("password").notNullable();
    table.string("name").notNullable();
    table.date("birthday").notNullable();
    table.string("profile_image");
    table.string("description");
    table.boolean("is_valid").defaultTo(false);
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("users");
}
