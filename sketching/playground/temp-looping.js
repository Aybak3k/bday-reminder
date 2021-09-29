//  for simplicity sake
const lg = val => console.log(val)


// import fs
const fs = require("fs");


// read data/* in obj data[]
const dataDirFiles = fs.readdirSync("data")
const dataFiles = []

for (const i in dataDirFiles) {
    dataFiles.push(
        JSON.parse(
            fs.readFileSync(
                `data/${dataDirFiles[i]}`
            )
        )
    )
}


// export dataFiles


// debugging
lg(dataFiles[0]["bday"])