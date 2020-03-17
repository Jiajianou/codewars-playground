#!/bin/bash

# Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer. Square all numbers k (0 <= k <= n) between 0 and n. Count the numbers of digits d used in the writing of all the k**2. Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.

# #Examples:

# n = 10, d = 1, the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
# We are using the digit 1 in 1, 16, 81, 100. The total count is then 4.

# nb_dig(25, 1):
# the numbers of interest are
# 1, 4, 9, 10, 11, 12, 13, 14, 19, 21 which squared are 1, 16, 81, 100, 121, 144, 169, 196, 361, 441
# so there are 11 digits `1` for the squares of numbers between 0 and 25.
# Note that 121 has twice the digit 1.


nbDig() {

    sqrArr=()

    for ((i=0;i<=$1;i++)); 
        do
        sqrArr[$i]=`expr $i * $i`
        done

    echo sqrArr
}
nbDig $1 $2


#!/bin/bash
nbDig2() {
    n=$1; dg=$2; cnt=0
    for((i=0;i <= n;i+=1)) do
        sq=$((i*i))
        k=$(grep -o "$dg" <<< "$sq" | wc -l)
        cnt=$((cnt + $k))
    done
    echo $cnt
}
nbDig2 $1 $2


for k in `seq 0 $1`; do echo -n `expr $k * $k`; done | sed -e "s/[^$2]//g" | wc -c


nbDig3() {
    for((i=0;i<=$1;i++)); do
        echo -n $((i**2))
    done | sed "s/[^$2]//g" | wc -c
}
nbDig3 $1 $2


nbDig4() {
    for (( n=0; n<= $1; n++ )); do
      n2=`echo $n^2 | bc`
      t="$t$n2"
    done
    c=${t//[^\'$2\']/}
    echo ${#c}
}
nbDig4 $1 $2



#Getting Variables
numbers=$1
count=$2
result=""
for (( i = 0; i < (($numbers + 1 )); i++ )); do
  square=$(( $i * $i ))
  result=$(echo -e  "$result\n$square")
done

echo "$result" | tr -cd $count | wc -c



nbDig5() {
    local counter=0
    local idx
    for (( idx=0; idx<=$1; idx++ )); do
        local number=$((idx**2))
        local rest=${number//$2/}
        let counter+=${#number}-${#rest}
    done
    echo $counter
}
nbDig5 $1 $2