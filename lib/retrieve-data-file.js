// import fs
const fs = require('fs')

// main()
exports.$ = pathToDir => {

    // create holders
    const dataFileObj = JSON.parse(fs.readFileSync(pathToDir))
    const dataObjectsArr = []

    // store data.json in [] as {}s
    for (const person in dataFileObj) {
        dataObjectsArr.push(
            // create standard key
            JSON.parse(`{"Name":"${person}", "B-day": "${dataFileObj[person]}"}`)
        )
    }

    return dataObjectsArr
}