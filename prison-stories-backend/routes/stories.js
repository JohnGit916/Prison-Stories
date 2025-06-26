import express from "express";
import db from "../db.js";

const router = express.Router();

// GET all stories
router.get("/", async (req, res) => {
  const result = await db.query("SELECT * FROM stories ORDER BY timestamp DESC");
  res.json(result.rows);
});

// POST a new story
router.post("/", async (req, res) => {
  const { name, status, title, content, anonymous } = req.body;
  const timestamp = new Date().toISOString();
  const likes = 0;

  const result = await db.query(
    "INSERT INTO stories (name, status, title, content, anonymous, timestamp, likes) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
    [name || "Anonymous", status, title, content, anonymous, timestamp, likes]
  );

  res.status(201).json(result.rows[0]);
});

export default router;
