const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    const query = `SELECT * FROM haiku`;
    console.log("query", query)
    db.query(query, [])
      .then((results) => {
        res.json(results.rows);
        console.log("result", res)
        res.status(201).send("Success! Enjoy the haiku!");
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
   
  });
  return router;
};
