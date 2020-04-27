const express = require("express");
const router = express.Router();

const burger = require("../models/burger");

router.get("/", function(req, res){
  burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res){
  console.log(req.body)
  burger.insertOne(req.body, function(data){
    res.json(data);
  })
});

router.put("/api/burgers/:id", function(req, res){
  let id = req.params.id;
  let condition = {id:id} // or just {id}
  burger.updateOne(condition, function(data){
    if (data.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  })
});

module.exports = router;