// import fs
const fs = require("fs");


// $()
const $ = (pathToDir = "data") => {

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


// export $()
module.exports = $