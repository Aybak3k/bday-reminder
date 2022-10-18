// import fs
const fs = require("fs")
const path = require("path")


// $()
const $ = (pathToDir) => {

    // create holders
    const dataFilesNames = fs.readdirSync(pathToDir)
    const dataObjectsArr = []
    
    // store data/* in [] as {}s
    for (const i in dataFilesNames) {
        dataObjectsArr.push(
            JSON.parse(
                fs.readFileSync(
                    `${pathToDir}/${dataFilesNames[i]}`
                )
            )
        )
    }

    return dataObjectsArr
}


// export $()
module.exports = $