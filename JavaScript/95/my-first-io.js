const fs = require('fs');
let buf = fs.readFileSync(process.argv[2]);
const str = buf.toString();
let newstr = str.split('\n');
console.log(newstr.length -1);