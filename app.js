const express = require("express");
const { env } = require("./config");
const app = express();

app.listen(env.port, console.info("Listening to port", env.port));
