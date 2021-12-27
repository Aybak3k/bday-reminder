// Data
const data = [
    { Name: 'bot-1-2-2000', day: 1, month: 2, year: 2000 },
    { Name: 'bot-1-3-2000', day: 1, month: 3, year: 2000 },
    { Name: 'bot-1-4-2000', day: 1, month: 4, year: 2000 },
    { Name: 'bot-1-8-2000', day: 1, month: 8, year: 2000 },
    { Name: 'bot-12-5-2000', day: 12, month: 5, year: 2000 },
    { Name: 'bot-31-5-2000', day: 31, month: 5, year: 2000 }
  ]


// Create an Array of Dates that haven't passed yet
const getNextBday = (dataObjArr = data, currentDate = new Date()) => {
    const nextBdays = []
    for (const index in dataObjArr) {
        const ele = new Date(currentDate.getFullYear(), dataObjArr[index]['month'] - 1, dataObjArr[index]['day'])
        if (!(ele < currentDate)){
            nextBdays.push(ele)
        }
    }
    if (nextBdays.length == 0) {
        return getNextBday(undefined, new Date(currentDate.setFullYear(currentDate.getFullYear() + 1, 0, 1)))
    }
    return nextBdays.reduce((a,b) => (a > b) ? b : a).toDateString()
}


// Testing
const lg = val => console.log(val)
lg(
    getNextBday(undefined, new Date())
    // getNextBday(undefined, new Date(2022, 8, 1))
)