// get The Name of Whoever has the Next Bday 
const getbdayPeople = (bday, dataObjArr) => {
    const month = bday.getMonth() + 1, day = bday.getDate()
    const people = []
    for (const index in dataObjArr) {
        if (dataObjArr[index]['month'] == month && dataObjArr[index]['day'] == day) {
            people.push(dataObjArr[index]['Name'])
        }
    }
    return people
}


// export $()
module.exports = getbdayPeople