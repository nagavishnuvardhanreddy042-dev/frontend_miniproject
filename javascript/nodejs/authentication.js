const express = require("express");

const app = express();

const PORT = 7800;

app.use(express.json());

const username = "admin";
const password = "1234";

app.post("/login", (req, res) => {
    if (
        req.body.username === username &&
        req.body.password === password
    ) {
        res.send("Login successful");
    } else {
        res.status(401).send("Invalid username or password");
    }
});

app.listen(PORT, () => {
    console.log(
        `Authentication server running at http://localhost:${PORT}`
    );
});