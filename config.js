const dotenv = require("dotenv").config();

const env = {
  port: process.env.DD_PORT,

  //Google Drive
  clientId: process.env.DD_ClientID,
  clientSecret: process.env.DD_ClientSecret,
};

exports.env = env;
