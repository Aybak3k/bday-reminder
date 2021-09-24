<!-- in order -->

### reading from data.json
```js
const fs = require("fs");
let data = fs.readFileSync("data.json");
// Sync so it awaits retrieving the data
```

### from JSON to JS obj
```js
let people = JSON.parse(data);
```

### looping through nested obj
```js
for (const person in people) {
    lg(`${person} : ${people[person].bday}`)
}
// returning the property alone makes it in string
// so if we want to access nested prop
// we have to use that syntax : people[person].bday
```