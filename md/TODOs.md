# INDEX
0) [Architecture](#architecture)
1) [Future Plans](#future-plans)
1) [Modifications](#modifications)
1) [Overall Scenario](#overall-scenario)
<!--  -->
1) [Listing Tasks](#listing-tasks)
1) [NOW!](#now)
___
<br><br><br>


## Architecture
- index.js  <!-- just ouput -->
- lib
    - data/  <!-- iterable -->
    - {interacting} <!-- retrieving -->
    - {functionality}  <!-- main() -->


## Future Plans
- dropping the year?
- do I need to create a file for taking input??
- more info for each person in `data/`
- the option to view all?
- config.js => settings like <\dir | file>
- .csv for data entry


## Modifications
- data/ >> data.json
    - retrieve && create
    - => obj[]  // array of objects + standard key


## Overall Scenario
> run from the terminal : prints next bday with person's name && then ask if you want to add a new one

___

## Listing Tasks
- creating
    - take input from user
    - create a file to store input in
- checks
    - valid bday date
    - empty data


## NOW!
- main function
    - takes bday_dates[]
        - in a loop
    - => nearest (lowest) bday (ms)
        - ignores year