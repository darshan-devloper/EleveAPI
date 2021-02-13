const dbConfig = require("../../config/database_config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("./user_module.js")(mongoose);

module.exports = db;



