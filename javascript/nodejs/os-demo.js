const os = require("os");

console.log("Operating System:", os.platform());
console.log("Computer Architecture:", os.arch());
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());