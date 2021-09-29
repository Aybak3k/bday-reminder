// problems
// unknown key

// import fs
const fs = require('fs')

// main()
const $ = pathToDir => {

    // create holders
    const dataFileObj = JSON.parse(fs.readFileSync(pathToDir))
    const dataObjectsArr = []

    // store data.json in [] as {}s
    for (const person in dataFileObj) {
        dataObjectsArr.push(
            // create standard key
            `{${person}: ${dataFileObj[person]}}`
        )
    }

    return dataObjectsArr
}

console.log(
    $("./data.json")[0]
)