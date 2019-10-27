import http from "http";
// import express from 'express'
// import bodyParser from "body-parser";
import logger from "morgan";
import routes from "./server/routes";

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
// const exphbs = require("express-handlebars")

const app = express();

const hostname = "127.0.0.1";
const port = process.env.port || 5000;

const server = http.createServer(app);

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routes(app);

app.get("/", (req, res) => res.send("Index"));

app.listen(port, console.log(`Server started on port ${port}`));

// app.get("*", (req, res) =>
//   res.status(200).send({
//     message: "Welcome to the ."
//   })
// );

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
