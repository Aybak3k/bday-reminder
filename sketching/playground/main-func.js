//  for simplicity sake
const lg = val => console.log(val)


// temp data
const dataFiles = [
    {"Name":"Noureldin Ghasey","B-day": "2003-1-1"},
    {"Name": "Youssef Elhosini","B-day": "2002-1-8"}
]


// start here


// debugging
lg(dataFiles[0]["Name"]+ " : " +
    new Date(
        dataFiles[0]["B-day"]
    ).toDateString()
)