const getData = require('./lib/retrieve-data')
const compareData = require('./lib/compare-bdays')

console.log(
    compareData(
        getData()
    )
)