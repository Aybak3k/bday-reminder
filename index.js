const getData = require('./lib/retrieve-data')
const compareData = require('./lib/compare-bdays')

compareData(
    getData()
)
