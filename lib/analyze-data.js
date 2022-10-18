// get Nearest Bday
const getNextBday = (dataObjArr, currentDate) => {


    // Vars
    const infoReturned ={
        nextBday: new Date(),
        bdayPeople: []
    }
    const sameYearDates = dataObjArr.map(person => new Date(currentDate.getFullYear(), person['month'] - 1, person['day']))


    // Set to the same year for Date comparsion
    infoReturned.nextBday = sameYearDates.reduce((a,b) => (a > b) ? b : a)


    // If no bday left in this year, go the start of the next year
    if (sameYearDates.length == 0) {
        return getNextBday(
            dataObjArr, 
            new Date(currentDate.setFullYear(currentDate.getFullYear() + 1, 0, 1))
        )
    }


    // Get Bday Owner\s
    // used push cz we might have just one val
    dataObjArr.forEach( person => {
            if (person['month'] == infoReturned.nextBday.getMonth() + 1
                && person['day'] == infoReturned.nextBday.getDate()) {
                infoReturned.bdayPeople.push(person['Name'])
            }
        }
    )


    // ...
    return infoReturned
}


// export $()
module.exports = getNextBday

// the problem here is that im performing the same search query twice
// while i grab the nextBday.. can't i grab its person\ppl?