const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello! This is my first Express.js application.");
});

app.listen(PORT, () => {
    console.log(`Express server running at http://localhost:${PORT}`);
});