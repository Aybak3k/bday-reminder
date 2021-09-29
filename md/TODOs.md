# INDEX
0) [Architecture](#architecture)
1) [Future Plans](#future-plans)
1) [Modifications](#modifications)
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
- dropping the year
- do I need to create a file for taking input??
- more info for each person in `data/`
- the option to view all?


## Modifications
- data.json => data/
___

## Listing Tasks
- data/ {interacting}
    - storing each file
    - as a JS obj
    - in [] && export it
- creating
    - take input from user
    - create a file to store input in
- check input
    - valid bday date


## NOW!
- main function
    - takes bday_dates[]
        - in a loop
    - => nearest (lowest) bday (ms)
        - ignores year
- data/ >> data.json
    - && in architecture