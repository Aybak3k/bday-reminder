// get Nearest Bday
const getNextBday = (dataObjArr, currentDate) => {


    // Vars
    const infoReturned ={
        nextBday: [],
        bdayPeople: []
    }
    const sameYearDates = dataObjArr.map(
            person => new Date(currentDate.getFullYear(), person['month'] - 1, person['day'])
        ).filter(person => !(person < currentDate))  // Set to the same year for Date comparsion


    // If no bday left in this year, go the start of the next year
    if (sameYearDates.length == 0) {
        return getNextBday(
            dataObjArr, 
            new Date(currentDate.setFullYear(currentDate.getFullYear() + 1, 0, 1))
        )
    }


    // ...
    infoReturned.nextBday = sameYearDates.reduce((a,b) => (a > b) ? b : a)


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