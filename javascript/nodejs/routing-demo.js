const express = require("express");

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Welcome to the Home Page");
});

app.get("/students", (req, res) => {
    res.send("This is the Students Page");
});

app.get("/contact", (req, res) => {
    res.send("This is the Contact Page");
});

app.listen(PORT, () => {
    console.log(`Routing server running at http://localhost:${PORT}`);
});