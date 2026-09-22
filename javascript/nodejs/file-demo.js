const fs = require("fs");

const content = "This file was created using Node.js File System module.";

fs.writeFileSync("sample.txt", content);

console.log("File created and data written successfully.");