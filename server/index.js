const express = require("express");

const cors = require("cors");

const port = 8000;
const app = express();

const db = require("./config/mongoose");

app.use(express.json()); // to parse JSON bodies

app.use(express.urlencoded()); //Parse URL-encoded bodies

app.use(cors());

app.use("/", require("./routes"));

app.listen(port, () => console.log(`Server running on port ${port}`));

// use express router
