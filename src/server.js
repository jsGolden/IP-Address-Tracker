// Importing libs
const express = require("express");
const path = require("path");
const pages = require("./pages");

// Initializing and setting server configs
const server = express();
server
  .use(express.urlencoded({ extended: true }))
  .use(express.static("public"))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs");

// Setting server Routes
server.get("/", pages.index);

server.listen(process.env.PORT || 5500);
