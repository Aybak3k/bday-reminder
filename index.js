const fs = require('fs')


let data = fs.readFileSync('data.json');
let people = JSON.parse(data);
console.log(people);