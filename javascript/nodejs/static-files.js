const express = require("express");
const path = require("path");

const app = express();

const PORT = 7200;

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
    console.log(`Static file server running at http://localhost:${PORT}`);
});