#!/bin/bash
mix () {
  for i in $(echo $1$2 | grep -o . | grep [a-z] | sort -u); do
    s1=${1//[^$i]} s2=${2//[^$i]}
    
    [ ${#s1} -eq 0 -a ${#s2} -eq 0 ] && continue
    [ ${#s1} -le 1 -a ${#s2} -le 1 ] && continue
    
    [ ${#s1} -lt ${#s2} ] && { echo "${#s2}@2:$s2" ; continue ; }
    [ ${#s1} -eq ${#s2} ] && { echo "${#s2}@=:$s2" ; continue ; }
    echo "${#s1}@1:$s1"
  done | sort -k 1r,2h -t @ | tr "\n" "/" | sed s/"[0-9]*@"/""/g | sed s/"\/$"//g
}
mix "$1" "$2"


#!/bin/bash
prt() {
        while(($1)); do
                case $3 in
                        11) echo -n '/1:';;
                        12) echo -n '/2:';;
                        23) echo -n '/=:';;
                esac
                for((i=0;i<$1; i++)); do
                        echo -n $2
                done
                shift 3
        done
}

mix() {
        tmp1="$(fold -w1 <<<"$1" | grep "[[:lower:]]" | sort | uniq -dc)"
        tmp2="$(fold -w1 <<<"$2" | grep "[[:lower:]]" | sort | uniq -dc)"
        tmp3="$(echo -e "$tmp1\n$tmp2" |sort -k2d -k1rn|uniq -d)"
        tmp3_p="$(echo "$tmp3" | sed 's/.\+/& 23/')"
        tmp1="$(echo -e "$tmp1\n$tmp3" | sed '/^$/d' | sort -k2d -k1rn | uniq -u)"
        tmp2="$(echo -e "$tmp2\n$tmp3" | sed '/^$/d' | sort -k2d -k1rn | uniq -u)"
        tmp4="$(echo -e "$tmp1\n$tmp2" | sort -k2d -k1rn | uniq -f1)"
        tmp1_1="$(echo -e "$tmp1\n$tmp4" | sort -k2d -k1rn | uniq -d)"
        tmp1_p="$(echo "$tmp1_1" | sed 's/.\+/& 11/')"
        tmp2_1="$(echo -e "$tmp2\n$tmp4" | sort -k2d -k1rn | uniq -d)"
        tmp2_p="$(echo "$tmp2_1" | sed 's/.\+/& 12/')"
        prt $(echo -e "$tmp1_p\n$tmp2_p\n$tmp3_p" | sort -k1rn -k3.1)
}

mix "$1" "$2" | sed 's/^\///'

mix() {
    for char in {a..z}; do
        s1_chars=${1//[^$char]}
        s2_chars=${2//[^$char]}

        s1_len=${#s1_chars}
        s2_len=${#s2_chars}

        [[ $s1_len -lt 2 && $s2_len -lt 2 ]] && continue

        # Cheat the sorting by prepending a negative length
        # that we remove later
        if [[ $s1_len -gt $s2_len ]]; then
            echo "-$s1_len,1:$s1_chars"
        elif [[ $s2_len -gt $s1_len ]]; then
            echo "-$s2_len,2:$s2_chars"
        else
            echo "-$s1_len,=:$s1_chars"
        fi
    done | sort -n | sed 's/^.*,//' | paste -sd '/'
}
mix "$1" "$2"

mix () {
  [[ $1 == $2 ]] && echo && return
  
  rep() { eval printf $1%.0s {1..$2}; }
  pretty() { echo -n $3:$(rep $2 $1)/; }

  # clean up, get individual frequencies and tag them with their source
  a=$(tr -dc '[[:lower:]]' <<< "$1" | grep -o . | sort | uniq -c | sed 's,$, 1,')
  b=$(tr -dc '[[:lower:]]' <<< "$2" | grep -o . | sort | uniq -c | sed 's,$, 2,')

  # filter, combine and presort the two frequency lists, merging the same frequencies
  echo -e "$a\n$b" | 
  awk 'BEGIN { 
         while(getline > 0 ) { 
           if ($2 in cnts) {
             if ($1 > cnts[$2]) { cnts[$2] = $1; srcs[$2] = $3; }
             else if ($1 == cnts[$2]) { srcs[$2] = "="; }
           } else {
             if ($1 > 1) { cnts[$2] = $1; srcs[$2] = $3; }
           }
         }
       }
       END { for(i in cnts) print cnts[i]" "i" "srcs[i]; }' |
  sort -k1gr -k3 |  
  # finally repeat the characters and pretty-print
  while read cnt ltr src; do 
    pretty $cnt $ltr $src
  done | sed 's,/$,,'
}
mix "$1" "$2"