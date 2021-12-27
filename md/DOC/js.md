<!-- unused
Object.keys(obj)[0]
 -->
# INDEX
0) [Side](#side)
1) [Loop thorugh nested obj]($loop-through-nested-obj)
1) [Read File](#read-file)
1) [JSON to obj](#json-to-obj)
1) [Read Dir](#read-dir)
1) [data dir OR data file](#data-dir-or-data-file)
1) [Custom Nodejs Modules](#custom-nodejs-modules)
1) [__dirname](#dirname)
1) [Change the name Crash the main](#change-the-name-crash-the-main)
1) ["go to next year"](#go-to-next-year)
___
<br><br><br>


## Side
- vscode windows
    - left : lib
    - right : md | data
    - bottom | whole : .sh
- workflow
    - main fucntion + temp date
    - data interaction


## Loop through nested obj
```js
// returning the property alone makes it in string
// so if we want to access nested prop
// we have to use that syntax : people[person].bdayd
for (const person in people) {
    lg(`${person} : ${people[person].bday}`)
}
```


## Read File
```js
const fs = require("fs");
let data = fs.readFileSync("data.json");
// Sync so it awaits retrieving the data
// HINT : don use require directly
```

## JSON to obj
```js
let people = JSON.parse(data);
```

## Read Dir
```js
fs.readdirSync( path, options )
// => dir files names as "" in []

/* along with
* for in && arr.push
* fs.readFileSync(`path/${arr[i]}`)
*/
```


## data dir OR data file
- data/ : long obj
- data.json : short obj


## Custom Nodejs Modules
```js
exports.$ = () => ...  // && then normal require
module.exports = $  // main func()
```


## __dirname
- index.js
- lib/
    - retrieve-data.js
> importing `rd()` is like writing the method inside `index.js` **&&!** executing it in it's own path


## Change the name Crash the main
```js
// problem line : 
pplObjArr.reduce((a,b) => (a.calDigit > b.calDigit) ? a : b)
// get ur eyes checked dude >> ? b : a
// but... Y tho?!...
```

___
<br><br>


## go to next year

```js
// 1) use recursion
// 2) "go to the next year !add a whole year"
if (nextBdays.length == 0) {
    return getNextBday(dataObjArr, new Date(currentDate.setFullYear(currentDate.getFullYear() + 1, 0, 1)))
}
```
