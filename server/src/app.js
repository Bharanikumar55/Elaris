const express = require("express");

const cors = require("cors");

const postRoutes = require("./routes/postRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {

    res.send("🌿 Welcome to Elaris Backend!");

});

app.use("/api/posts", postRoutes);

module.exports = app;