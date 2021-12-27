const data = require('./lib/retrieve-data')()
const getNextBday = require('./lib/get-next-bday')


console.log(
    getNextBday(data, new Date()).toDateString()
)