# Vars
d=''
m=''
y=''
name=''

# template
read -r -d '' template << EOM
{
    "Name":"bot-",
    "day": 1,
    "month": 10,
    "year": 2002
}
EOM

# create file
echo "$template"
#  > "./lib/data${name}.json"
