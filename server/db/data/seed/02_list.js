/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("list").del();
  await knex("list").insert([
    {
      id: 1,
      user_id: 1,
      text: "Alice の最初のタスク",
      created_at: knex.fn.now(),
    },
    {
      id: 2,
      user_id: 1,
      text: "Alice の二つ目のタスク",
      created_at: knex.fn.now(),
    },
    {
      id: 3,
      user_id: 2,
      text: "aaa のタスク",
      created_at: knex.fn.now(),
    },
  ]);
};
