const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");

// rest object
const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));

// routes
app.get("/", (req, res) => {
  res.status(200).send({
    message: "server is running",
  });
});

// dotenv congig
dotenv.config();

// port
const port = process.env.PORT || 5000;

// listen port
app.listen(port, () => {
  console.log(`Server is running @ ${port} in ${process.env.NODE_MODE} mode`);
});