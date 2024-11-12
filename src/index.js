const express = require("express");
const { port } = require("./config/server-config");
const bodyParser = require("body-parser");
const app = express();
const PORT = port || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const start = () => {
  app.listen(3000, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

start();
