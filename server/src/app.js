const express = require("express");
const cors = require("cors");

const app = express();

// -----------------------------
// Middlewares
// -----------------------------

app.use(cors());

app.use(express.json());

// -----------------------------
// Routes
// -----------------------------




app.get("/", (req, res) => {

    res.send("🌿 Welcome to Elaris Backend!");

});

// GET

app.get("/api/posts", (req, res) => {

    res.json({

        message: "Returning all posts."

    });

});

// POST

app.post("/api/posts", (req, res) => {

    res.json({

        message: "New post created."

    });

});

// PUT

app.put("/api/posts/:id", (req, res) => {

    res.json({

        message: `Updated post ${req.params.id}`

    });

});

// DELETE

app.delete("/api/posts/:id", (req, res) => {

    res.json({

        message: `Deleted post ${req.params.id}`

    });

});

module.exports = app;
// -----------------------------
// Routes
// -----------------------------