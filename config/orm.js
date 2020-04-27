var connection = require("../config/connection.js");

let orm = {
    selectAll: function(tableInput, cb){
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
               throw err;
            }
            cb(result);
        });
    },
    insertOne: function(tableInput, vals, cb){
        var queryString = "INSERT INTO " + tableInput + " SET ?";
        connection.query(queryString, vals, function(err, result) {
         if (err) {
            throw err;
         }
         cb(result);
      });
    },
    updateOne: function(tableInput, vals, condition, cb){
      var queryString = "UPDATE " + tableInput + " SET ? WHERE ?";
        connection.query(queryString, [vals, condition], function(err, result) {
         if (err) {
            throw err;
         }
         cb(result);
      });
    }
};

// var asdf = {devoured: true}

module.exports = orm;