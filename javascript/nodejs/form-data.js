const express = require("express");

const app = express();

const PORT = 7300;

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));

// Display form
app.get("/", (req, res) => {
    res.send(`
        <h1>Student Form</h1>

        <form method="POST" action="/submit">
            <input
                type="text"
                name="studentName"
                placeholder="Enter your name"
                required
            >
            <br><br>

            <button type="submit">Submit</button>
        </form>
    `);
});

// Handle submitted form data
app.post("/submit", (req, res) => {
    res.send("Welcome, " + req.body.studentName);
});

app.listen(PORT, () => {
    console.log(`Form server running at http://localhost:${PORT}`);
});