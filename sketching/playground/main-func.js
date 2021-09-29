//  for simplicity sake
const lg = val => console.log(val)


// temp data
const dataFiles = [
    {"Name":"R1","B-day": "2001-5-1"},
    {"Name":"R2","B-day": "2001-2-4"},  // 2004
    {"Name":"R3","B-day": "2000-4-7"},
    {"Name":"R4","B-day": "2002-1-15"},
    {"Name":"R5","B-day": "2003-3-30"},
    {"Name":"R6","B-day": "1996-1-29"}
]


// start here
// for (const p in dataFiles) {
// 
// }


// debugging
// lg(new Date(dataFiles[0]["B-day"]).toDateString())
let _1d = dataFiles[0]["B-day"]
let _2d = dataFiles[1]["B-day"]
lg((_1d > _2d) ? "R2" : "R1")
// lg(_5d > _2d)

// matching with data (nearest ~ furtherest)
// R4
// R6
// R2
// R5
// R3
// R1