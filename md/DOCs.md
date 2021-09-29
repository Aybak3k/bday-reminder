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
___
<br><br><br>


## Side
- vscode windows
    - left : lib
    - right : md
    - bottom : .sh
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
module.exports $  // main func()
```