const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log('first middle ware');
    next();
});


app.use("/api/posts", (req, res, next) => {
  const posts =
       [
         {title: "title data",
          content: "content data"},
          {title: "second data",
          content: "content data"},
          {title: "third title ",
          content: "content data"}

       ]
  res.json(posts);
});

module.exports = app;
