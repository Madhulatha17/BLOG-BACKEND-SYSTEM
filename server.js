const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const db = new sqlite3.Database("database.db");

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    password TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS blogs(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    content TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS comments(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    blog_id INTEGER,
    comment TEXT
  )`);
});

app.post("/register", (req, res) => {
  res.json({ message: "User Registered Successfully" });
});

app.post("/blogs", (req, res) => {
  res.json({ message: "Blog Created Successfully" });
});

app.get("/blogs", (req, res) => {
  res.json([]);
});

app.post("/comments", (req, res) => {
  res.json({ message: "Comment Added Successfully" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
