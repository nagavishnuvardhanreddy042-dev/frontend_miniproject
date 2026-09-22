const express = require("express");

const app = express();

const PORT = 7000;

app.use((req, res, next) => {
    console.log("Middleware executed");
    next();
});

app.get("/", (req, res) => {
    res.send("Welcome to the Middleware Demo");
});

app.listen(PORT, () => {
    console.log(`Middleware server running at http://localhost:${PORT}`);
});