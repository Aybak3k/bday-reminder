// Data
const pplObjArr = [
    { Name: 'bot-1-2-2000', day: 1, month: 2, year: 2000 },
    { Name: 'bot-1-3-2000', day: 1, month: 3, year: 2000 },
    { Name: 'bot-1-4-2000', day: 1, month: 4, year: 2000 },
    { Name: 'bot-1-8-2000', day: 1, month: 8, year: 2000 },
    { Name: 'bot-12-5-2000', day: 12, month: 5, year: 2000 },
    { Name: 'bot-31-5-2000', day: 31, month: 5, year: 2000 }
]


// Return Digits  // "map ain func"..
const returnDigits = (objArr, calDigit) => {
    let arr = []
    for (let ele of objArr){
        arr.push(ele[`${calDigit}`])
    }
    return arr
}


// Current Date Vars
const currentDate = new Date(2022, 5 - (1), 1)
const currentMonth = currentDate.getMonth() + 1  // 0-11
const currentDay = currentDate.getDate()  // 1-31


// Find Nearest Calendrical Digit >> month || day
const getNearestDigit = (pplObjArr, calDigit, currentDigit) => {
    const filteredDigits = returnDigits(pplObjArr, calDigit).filter(digit => digit >= currentDigit)
    const nearest = filteredDigits.reduce((a,b) => (a > b) ? b : a)
    return nearest
}


// create identical nearest digits [] - using getNearestDigit()
const getIdenticals = pplObjArr => {
    const identicals = []

    // TODO: it crashes on 1/5 >> bcz of days
    for (let index in pplObjArr) {
        if (getNearestDigit(pplObjArr, "month", currentMonth) == pplObjArr[index]["month"]) {  // check months
            if (getNearestDigit(pplObjArr, "day", currentDay) == pplObjArr[index]["day"]) { // check days
                identicals.push(pplObjArr[index])
            } else {
                // TODO: if day not found in current month >> go to the next one
                // 1 !=2
            }
        }
    }

    return getNearestDigit(pplObjArr, "day", currentDay)
}


// formate output for the user
const getFormated = pplObjArr => {
    const people = getIdenticals(pplObjArr)

    // print the date only once
    console.log(`On ${people[0]["month"]}/${people[0]["day"]}`)

    // print people's name with identical bdays
    for (let index in people) {
        console.log(`Happy Birthday, ${people[index]["Name"]}:)`)
    }
}


// Testing
const lg = val => console.log(val)
// getFormated(pplObjArr)
// lg(returnDigits(pplObjArr, 'month'))
lg(getNearestDigit(pplObjArr, "month", currentMonth))