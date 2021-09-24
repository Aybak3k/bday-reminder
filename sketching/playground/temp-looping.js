// for the DOCs
    // fs.readdirSync( path, options )
        // store dir/ files **AS STRING** in []
        // use length && string name??


//  for simplicity sake
const lg = val => console.log(val)


// import fs
const fs = require("fs");


// read data/* in obj[]
const data = []
const dataFiles = fs.readdirSync("data")

for (const i in dataFiles) {
    data.push(
        fs.readFileSync(
            `data/${dataFiles[i]}`
        )
    )
}
lg(JSON.parse(data[0]))