const dotenv = require("dotenv").config();

const env = {
  port: process.env.DD_PORT,
};

exports.env = env;
