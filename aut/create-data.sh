# Configs
tabs 4

# Vars
days=(1 1 1 12 31 1)
months=(2 3 4 5 5 8)
y=2000

# template generator
tmpl_gen_this_val=0
tmpl_gen_name_val=0
tmpl_gen () {
    d=$1
    m=$2
    y=$3

    name="bot-${d}-${m}-${y}"
    template="
    {\n
        \t\"Name\": ${name},\n
        \t\"day\": ${d},\n
        \t\"month\": ${m},\n
        \t\"year\": ${y}\n
    \b}
    "
    tmpl_gen_this_val=$template
    tmpl_gen_name_val=$name
}

# create files
for ((i=0; i<${#days[@]}; i++));
do
    tmpl_gen "${days[i]}" "${months[i]}" $y
    echo -e $tmpl_gen_this_val > "./lib/data/${tmpl_gen_name_val}.json"
done
