# INDEX
0) [Side](#side)
1) [reading files](#reading-files)
1) [JSON to obj](#json-to-obj)
___
<br><br><br>


## Side
- flow
    - main fucntion + temp date
    - data interaction
- looping through nested obj :
    ```js
    // returning the property alone makes it in string
    // so if we want to access nested prop
    // we have to use that syntax : people[person].bdayd
    for (const person in people) {
        lg(`${person} : ${people[person].bday}`)
    }
    ```


## reading files
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