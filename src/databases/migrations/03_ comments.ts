import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("user_type", (table) => {
    table.increments("id").primary();
    table.text("comment").notNullable();
    table
      .integer("author")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table
      .integer("poetry")
      .references("id")
      .inTable("poetry")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("user_type");
}
