// Data
const pplObjArr = [
    { Name: 'bot-1-2-2000', day: 1, month: 2, year: 2000 },
    { Name: 'bot-1-3-2000', day: 1, month: 3, year: 2000 },
    { Name: 'bot-1-4-2000', day: 1, month: 4, year: 2000 },
    { Name: 'bot-1-8-2000', day: 1, month: 8, year: 2000 },
    { Name: 'bot-12-5-2000', day: 12, month: 5, year: 2000 },
    { Name: 'bot-31-5-2000', day: 31, month: 5, year: 2000 }
]


// Current Date Vars
const currentDate = new Date(2022, 0, 1)
const currentMonth = currentDate.getMonth()  // 0-11
const currentDay = currentDate.getDate()  // 1-31


// Find Nearest Calendrical Digit >> month || day
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


// Testing
getFormated(pplObjArr)