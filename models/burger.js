const orm = require("../config/orm");

let burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", cb);
    },
    insertOne: function(vals, cb){
        orm.insertOne("burgers", vals, cb);
    },
    updateOne: function(condition, cb){
        orm.updateOne("burgers", {devoured: true}, condition, cb);
    }
}

module.exports = burger;