// date VARs
const currentDate = new Date()
const currentMonth = currentDate.getMonth()  // 0-11
const currentDay = currentDate.getDate()  // 1-31

// find nearest calendrical digit : month || day
const getNearest = (pplObjArr, calDigit) => {
    const nearest = pplObjArr.reduce((a,b) => (a[`${calDigit}`] > b[`${calDigit}`]) ? b : a)
    return nearest
}


// create identical nearest digits [] - using getNearest()
const getIdenticals = pplObjArr => {
    const identicals = []

    for (const index in pplObjArr) {
        if (getNearest(pplObjArr, "month")["month"] == pplObjArr[index]["month"]) {  // check months
            if (getNearest(pplObjArr, "days")["day"] == pplObjArr[index]["day"]) { // check days
                identicals.push(pplObjArr[index])
            }
        }
    }

    return identicals
}


// formate output for the user
const getFormated = pplObjArr => {
    const people = getIdenticals(pplObjArr)

    // print the date only once
    console.log(`On ${people[0]["month"]}/${people[0]["day"]}`)

    // print people's name with identical bdays
    for (const index in people) {
        console.log(`Happy Birthday, ${people[index]["Name"]}:)`)
    }
}


// export $()
module.exports = getFormated