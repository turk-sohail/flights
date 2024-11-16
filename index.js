const express = require("express");
const { port } = require("./src/config/server-config");
const bodyParser = require("body-parser");
const app = express();
const PORT = port || 3000;
const apiRouter = require("./src/routes");
const db = require("./src/models/index");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/** routes */

app.use("/api", apiRouter);

/** */

const start = () => {
  app.listen(3000, () => {
    // db.sequelize.sync({ alter: true });
    console.log(`Server is running on port ${PORT}`);
  });
};

start();
