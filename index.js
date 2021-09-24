// for simplicity sake
const lg = val => console.log(val)

// reading from data.json && parsing
const fs = require("fs");
let data = fs.readFileSync("data.json");
let people = JSON.parse(data);

// looping throuh JSON file && printing
for (const person in people) {
    lg(`${person} : ${people[person].bday}`)
}

// debugging
