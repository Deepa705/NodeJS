const dbconfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise; //enable promise obj db & node

const db ={}; // db connections properties to extablish
db.mongoose = mongoose;
db.url = dbconfig.url;
db.products = require("./product.model.js")(mongoose);
db.carts = require("./cart.model.js")(mongoose);
// db.carts = require("./cart")
module.exports = db;