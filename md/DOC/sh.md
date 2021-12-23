# INDEX
1) [Functions](#functions)
1) [loop through many arrays](#loop-through-many-arrays)
___
<br><br><br>



## Functions

<br>

### basic syntax
```bash
function_name () {
    # cmds
}

function_name  # call it with no ()
```

<br>

### with args
```bash
function_name () {
    # you can always do << arg1_name=$1
    echo "$1"
}

function_name "arg1"
```

<br>

### return vals
```bash
function_return_val=0
function_name () {
    # ...
    function_return_val=$result
}

function_name
echo $function_return_val
```

___
<br><br>


## loop through many arrays

```bash
for ((i=0; i<${#arr1[@]}; i++));
do
    echo "${arr1[i]}" "${arr2[i]}"
done
```
