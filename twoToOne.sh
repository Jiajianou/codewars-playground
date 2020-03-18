#!/bin/bash


# Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

# each taken only once - coming from s1 or s2.
# Examples:
# a = "xyaabbbccccdefww"
# b = "xxxxyyyyabklmopq"
# longest(a, b) -> "abcdefklmopqwxy"

# a = "abcdefghijklmnopqrstuvwxyz"
# longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


# longest () {

#     combined="$1$2"
#     arr=($combined)
 
#     # for (( i=0; i<${#combined}; i++ ));

#     #     do
            
#     #         # output=$output${combined:$i:1}
#     #         echo "${combined:$i:1}"

#     #     done | sort -u | output=$output${combined:$i:1}

#      sort -u <<< $arr

#    echo $arr 


# }




# a="aretheyhere"
# b="yestheyarehere"

# longest "aretheyhere" "yestheyarehere"

#should be "aehrsty"


longest() {
    echo $1$2 | grep -o . | sort -u | paste -sd "" -
}
longest "$1" "$2"


longest2 () {
   string="$1$2"
   data=`echo "$string"|grep -o "[a-z]"|sort|uniq|tr -d '\n'`
   echo "$data"
}
longest2 "$1" "$2"

longest3 () {
   s1=$1
   s2=$2
   v=$(echo $s1 $s2 | grep -o . |sort|uniq|tr -d "\r\n")
   echo $v
}
longest3 "$1" "$2"

r=
for i in $(echo $1$2|grep -o .|sort --unique);
do r=$r$i
done
echo $r


echo "$1$2" | fold -w1 | sort | uniq | tr '\n' ' ' | sed 's/\ //g'


longest () {
  array=( $(echo $1$2 | grep -o .) )
  sorted_array=( $(printf "%s\n" "${array[@]}" | sort | uniq) )
  sorted_string=$(IFS='' ; echo "${sorted_array[*]}")
  echo $sorted_string
}
longest "$1" "$2"


longest4 () {

    s="${1}${2}"
    while read -n 1 c; do a+=($c); done  <<< "$s"
    tmp_a=/tmp/tmpfile
    echo "" > $tmp_a
    for i in ${a[@]}; do
      echo -en "$i\n" >> $tmp_a
    done
    unique=`sort -n $tmp_a | uniq`
    echo "" > $tmp_a
    echo $unique | sed 's/ //g' >> $tmp_a

    echo $(cat $tmp_a)
}
longest4 "$1" "$2"


longest5 () {
  echo $1$2 | grep -o . | sort -u | tr -d '\n\r'
    # your code
}
longest5 "$1" "$2"


foo() {
  echo $1 | while read -n1 i; do
    echo $i
  done
}
longest6 () {
  { foo $1 & foo $2; } | sort -di | uniq | tr -d '\n\r'
    # your code
}
longest6 "$1" "$2"


longest7 () {
    output=""
    for letter in {a..z} ; do
        if [[ $1 ==  *$letter* ]] || [[ $2 == *$letter* ]] ; then
            output="${output}${letter}"
        fi
    done
    echo $output
}
longest7 "$1" "$2"


echo -e "$1\n$2" | awk -F  '' -v 'OFS=\n' '{$1=$1}1' | sort -u | xargs | tr -d ' '


longest8 () {
  local acc=''
  for t in {a..z}; do
    if [[ $1 =~ $t ]] || [[ $2 =~ $t ]]; then
      acc="$acc$t";
    fi
  done
  echo "$acc"
}
longest8 "$1" "$2"