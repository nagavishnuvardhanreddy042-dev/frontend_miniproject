const express = require("express");

const app = express();

const PORT = 7700;

app.get("/api/student", (req, res) => {
    res.json({
        id: 1,
        name: "Akshara",
        course: "Computer Science"
    });
});

app.listen(PORT, () => {
    console.log(`REST API running at http://localhost:${PORT}`);
});