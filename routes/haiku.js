
const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
   
    db.query(query, [])
      .then((res) => {
        res.json(results.rows);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
      return router;
  });