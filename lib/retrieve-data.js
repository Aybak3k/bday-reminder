// import fs
const fs = require("fs");


// $()
const $ = (pathToDir = (__dirname + "/data")) => {  // add __dirname for files importing

    // create holders
    const dataFilesNames = fs.readdirSync(pathToDir)
    const dataObjectsArr = []
    
    // store data/* in [] as {}s
    for (const i in dataFilesNames) {
        dataObjectsArr.push(
            JSON.parse(
                fs.readFileSync(
                    `${__dirname}/data/${dataFilesNames[i]}`
                )
            )
        )
    }

    return dataObjectsArr
}


// export $()
module.exports = $

// testing
// console.log($());