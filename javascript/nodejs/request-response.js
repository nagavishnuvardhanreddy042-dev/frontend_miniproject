const express = require("express");

const app = express();

const PORT = 7100;

app.get("/", (req, res) => {
    res.send("This is the Home Page");
});

app.get("/student", (req, res) => {
    res.send("Student Name: Akshara");
});

app.listen(PORT, () => {
    console.log(`Request-Response server running at http://localhost:${PORT}`);
});