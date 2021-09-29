//  for simplicity sake
const lg = val => console.log(val)


// import fs
const fs = require("fs");


// store data/* in [] as {}s
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
lg(dataFiles[0]["Name"]+ " : " +
    new Date(
        dataFiles[0]["B-day"]
    ).toDateString()
)