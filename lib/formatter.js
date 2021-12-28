// Create a Structured Congrats Msg
const formatter = (bday, bdayPeopleArr) => {
    let msg = `Next Bday On: ${bday.toDateString()}`
    for (const index in bdayPeopleArr) {
        msg += `\nHappy Birthday, ${bdayPeopleArr[index]}`
    }
    return msg
}


// export $()
module.exports = formatter