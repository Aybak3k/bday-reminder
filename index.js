// Imports
const data = require('./lib/retrieve-data')()
const nextBday = require('./lib/get-next-bday')(data, new Date())
const bdayPeople = require('./lib/get-bday-ppl')(nextBday, data)
const formattedMsg = require('./lib/formatter')(nextBday, bdayPeople)


// OUTPUT
console.log(formattedMsg)