const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

const PORT = 7400;

// Enable cookie-parser middleware
app.use(cookieParser());

// Create cookie
app.get("/", (req, res) => {
    res.cookie("studentName", "Akshara");
    res.send("Cookie has been created successfully.");
});

// Read cookie
app.get("/read-cookie", (req, res) => {
    res.send("Cookie Value: " + req.cookies.studentName);
});

app.listen(PORT, () => {
    console.log(`Cookie server running at http://localhost:${PORT}`);
});