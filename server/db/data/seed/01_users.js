/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      id: 1,
      mail: "alice@example.com",
      name: "Alice",
      password_hash: "password_1",
      address: "Tokyo",
      created_at: knex.fn.now(),
    },
    {
      id: 2,
      mail: "ume@example.com",
      name: "ume",
      password_hash: "password_2",
      address: "toyota",
      created_at: knex.fn.now(),
    },
    {
      id: 3,
      mail: "aaa@example.com",
      name: "aaa",
      password_hash: "password_3",
      address: "Tokyo",
      created_at: knex.fn.now(),
    },
  ]);
};
