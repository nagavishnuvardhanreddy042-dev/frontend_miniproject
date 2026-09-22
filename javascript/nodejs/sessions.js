const express = require("express");
const session = require("express-session");

const app = express();

const PORT = 7500;

app.use(session({
    secret: "my-secret-key",
    resave: false,
    saveUninitialized: true
}));

// Store session data
app.get("/", (req, res) => {
    req.session.studentName = "Akshara";
    res.send("Session data has been stored.");
});

// Read session data
app.get("/read-session", (req, res) => {
    res.send("Session Value: " + req.session.studentName);
});

app.listen(PORT, () => {
    console.log(`Session server running at http://localhost:${PORT}`);
});