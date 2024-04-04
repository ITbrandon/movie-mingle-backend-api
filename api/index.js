const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

app.get("/trial", (req, res) => res.send({status:200}))

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
