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