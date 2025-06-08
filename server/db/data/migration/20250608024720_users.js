/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
  await knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.string("mail");
    table.string("name");
    table.text("password_hash");
    table.string("address");
    table.timestamp("created_at", { useTz: true }).defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
  await knex.schema.dropTable("users");
};
