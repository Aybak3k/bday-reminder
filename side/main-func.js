// Data
const pplObjArr = [
    { Name: 'bot-1-2-2000', day: 1, month: 2, year: 2000 },
    { Name: 'bot-1-3-2000', day: 1, month: 3, year: 2000 },
    { Name: 'bot-1-4-2000', day: 1, month: 4, year: 2000 },
    { Name: 'bot-1-8-2000', day: 1, month: 8, year: 2000 },
    { Name: 'bot-12-5-2000', day: 12, month: 5, year: 2000 },
    { Name: 'bot-31-5-2000', day: 30, month: 5, year: 2000 }
]


// Vars
const currentDate = new Date(2022, 8, 1)


// Create an Array of Dates that haven't passed yet
const listBdays = (dataObjArr = pplObjArr) => {
    const nextBdays = []
    for (const index in dataObjArr) {
        const ele = new Date(currentDate.getFullYear(), dataObjArr[index]['month'] - 1, dataObjArr[index]['day'])
        if (!(ele < currentDate)){
            nextBdays.push(ele)
        } else {
            // TODO: if undefined then go to the next year
        }
    }
    return nextBdays
}


// Return the Next bday(s)
const getNextBday = datesArr => {
    return datesArr.reduce((a,b) => (a > b) ? b : a)
}


// Testing
const lg = val => console.log(val)
// lg(
//     getNextBday(listBdays())
//     .toDateString()
// )
lg(
    listBdays()
    // TODO: dataObjArr []
)