// Imports
const data = require('./lib/retrieve-data')()
const nextBday = require('./lib/get-next-bday')(data, new Date())
const bdayPeople = require('./lib/get-bday-ppl')(nextBday, data)


// Output a Structured Congrats Msg
console.log(`Next Bday On: ${nextBday.toDateString()}`)
bdayPeople.forEach(person => console.log(`Happy Birthday, ${person}`))
