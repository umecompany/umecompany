/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
  await knex.schema.createTable("list", (table) => {
    table.increments("id").primary();
    table.integer("user_id");
    table.foreign("user_id").references("users.id").onDelete("CASCADE");
    table.string("text");
    table.timestamp("created_at", { useTz: true }).defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
  await knex.schema.dropTable("list");
};
