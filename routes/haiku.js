const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    const query = `SELECT * FROM haiku`;
    db.query(query, [])
      .then((res) => {
        res.json(results.rows);
        console.log(res)
        res.status(201).send("Success! Enjoy the haiku!");
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
   
  });
  return router;
};
