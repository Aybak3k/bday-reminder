// get Nearest Bday
const getNextBday = (dataObjArr, currentDate) => {
    const nextBdays = []
    for (const index in dataObjArr) {
        const ele = new Date(currentDate.getFullYear(), dataObjArr[index]['month'] - 1, dataObjArr[index]['day'])
        if (!(ele < currentDate)){
            nextBdays.push(ele)
        }
    }
    if (nextBdays.length == 0) {
        return getNextBday(dataObjArr, new Date(currentDate.setFullYear(currentDate.getFullYear() + 1, 0, 1)))
    }
    return nextBdays.reduce((a,b) => (a > b) ? b : a)
}


// export $()
module.exports = getNextBday