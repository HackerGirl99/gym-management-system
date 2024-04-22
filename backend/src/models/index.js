const dbConfig = require("../db/connection.js");

const mongoose = require("mongoose");

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;


module.exports = db;