const mongoose = require("mongoose");
const db_url =
  "mongodb+srv://shubham-wb:7pLLBCxPtS7koIfZ@cluster0.lqrxb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(db_url);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", function () {
  console.log("Connected to Database :: MongoDB");
});

module.exports = db;
