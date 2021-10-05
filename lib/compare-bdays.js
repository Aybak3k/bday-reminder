// ---------------------------------------
// identical, min, months&&days
// new Date(closest).toDateString()


// testing : importing data
const people = require('./retrieve-data')()


// find nearest calendrical digit : month || day
const getNearest = (pplObjArr, calDigit) => {
    const nearest = pplObjArr.reduce((a,b) => (a.calDigit > b.calDigit) ? a : b)
    return nearest
}


// collect all identical nearest digitd in an []



// testing
console.log(getNearest(people, "month"))