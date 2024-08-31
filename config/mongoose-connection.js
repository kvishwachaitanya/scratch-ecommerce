const mongoose = require("mongoose");
const config = require("config");
const dbgr = require("debug")("development:mongoose");
require('dotenv').config();

mongoose
.connect(`${config.get("MONGODB_URI")}/ForU999`)
.then(function(){
    dbgr("connected");
})
.catch(function(err){
    dbgr(err);
})

module.exports = mongoose.connection;