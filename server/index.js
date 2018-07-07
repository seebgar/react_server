// import express library
const express = require("express");
const app = express();

/* ROUTE HANDLER  */

// express app - RESTFUL SERVICE - url, function : incoming request, outgoing response
app.get("/", (request, response) => {
  response.send({ message: "c'est une website en francais" });
});

// Dynamically PORT for HEROKU deployment, which is the one who defines the port
// 5000 for local
const PORT = process.env.PORT || 5000;
app.listen(PORT);

// Deployment Locally
// $ nodemon index.js
