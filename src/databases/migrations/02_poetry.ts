import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("poetry", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.text("body").notNullable();
    table
      .integer("author")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table
      .integer("category")
      .references("id")
      .inTable("categories")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("poetry");
}
