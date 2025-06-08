const path = require("path");
const express = require("express");
const db = require("./server/db/index");
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/api/lists", async (req, res) => {
  const all = await db("list").select("*").orderBy("created_at", "desc");
  res.status(200).json(all);
});

app.post("/api/lists", async (req, res) => {
  const newObj = req.body;
  const result = await db("list")
    .insert(newObj)
    .returning("*")
    .orderBy("created_at", "desc");
  console.log(result);
  const all = await db("list").select("*");
  // 200 OK で全件返却
  res.status(200).json(all);
  // res.status(200).json(result);
});

app.put("/api/lists", async (req, res) => {
  console.log(req.body);
  const update = await db("list")
    .where("id", req.body.id)
    .update(req.body)
    .returning("*");
  res.status(200).json(update);
});

// 静的ファイル配信先を public に設定
app.use(express.static(path.join(__dirname, "public")));

// SPA フォールバック
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});

module.exports = app;
