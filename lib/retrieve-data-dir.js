// import fs
const fs = require("fs");

// main()
exports.$ = pathToDir => {

    // create holders
    const dataFilesNames = fs.readdirSync(pathToDir)
    const dataObjectsArr = []
    
    // store data/* in [] as {}s
    for (const i in dataFilesNames) {
        dataObjectsArr.push(
            JSON.parse(
                fs.readFileSync(
                    `data/${dataFilesNames[i]}`
                )
            )
        )
    }

    return dataObjectsArr
}