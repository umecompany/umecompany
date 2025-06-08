const path = require("path");
const express = require("express");
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/api", (req, res) => {
  res.send("Hello");
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

// module.exports = app;
