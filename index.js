// Imports
const data = require('./lib/retrieve-data')()
const {nextBday, bdayPeople} = require('./lib/analyze-data')(data, new Date())


// Output a Structured Congrats Msg
console.log(`Next Bday On: ${nextBday.toDateString()}`)
bdayPeople.forEach(person => console.log(`Happy Birthday, ${person}`))
