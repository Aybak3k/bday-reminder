// import fs
const fs = require("fs");

// main()
exports.$ = pathToDir => {

    // create holders
    const dataFilesNames = fs.readdirSync(pathToDir)
    const dataFiles = []
    
    // store data/* in [] as {}s
    for (const i in dataFilesNames) {
        dataFiles.push(
            JSON.parse(
                fs.readFileSync(
                    `data/${dataFilesNames[i]}`
                )
            )
        )
    }

    return dataFiles
}