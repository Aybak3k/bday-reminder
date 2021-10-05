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


// create identical nearest digits [] - using getNearest()
const getIdenticals = _ => {
    const identicals = []

    for (const index in people) {
        if (getNearest(people, "month")["month"] == people[index]["month"]) {  // check months
            if (getNearest(people, "days")["day"] == people[index]["day"]) { // check days
                identicals.push(people[index])
            }
        }
    }

    return identicals
}


// testing
console.log(getIdenticals())