// In this kata, you need to make a (simplified) LZ78 encoder and decoder. LZ78 is a dictionary-based compression method created in 1978. You will find a detailed explanation about how it works below.

// The input parameter will always be a non-empty string of upper case alphabetical characters. The maximum decoded string length is 1000 characters.

// Instructions
// If anyone has any ideas on how to make the instructions shorter / clearer, that would be greatly appreciated.

// If the below explanation is too confusing, just leave a comment and I'll be happy to help.

// The input is looked at letter by letter. Each letter wants to be matched with the longest dictionary substring at that current time.

// The output is made up of tokens. Each token is in the format <index, letter> where index is the index of the longest dictionary value that matches the current substring and letter is the current letter being looked at.

// Here is how the string 'ABAABABAABAB' is encoded:

// First, a dictionary is initialised with the 0th item pointing to an empty string:
// Dictionary      Input             Output
// 0  |  ''        ABAABABAABAB
// The first letter is A. As it doesn't appear in the dictionary, we add A to the next avaliable index. The token <0, A> is added to the output:
// Dictionary      Input             Output

// 0  |  ''        ABAABABAABAB      <0, A>
// 1  |  A         ^
// The second letter is B. It doesn't appear in the dictionary, so we add B to the next avaliable index. The token <0, B> is added to the output:
// Dictionary      Input             Output

// 0  |  ''        ABAABABAABAB      <0, A> <0, B>
// 1  |  A          ^
// 2  |  B
// The third letter is A again: it already appears in the dictionary at position 1. We add the next letter which is also A. AA doesn't appear in the dictionary, so we add it to the next avaliable index. The token <1, A> is added to the output:
// Dictionary      Input             Output

// 0  |  ''        ABAABABAABAB      <0, A> <0, B> <1, A>
// 1  |  A           ^^
// 2  |  B
// 3  |  AA
// The next letter is B again: it already appears in the dictionary at position 2. We add the next letter which is A. BA doesn't appear in the dictionary, so we add it to the next avaliable index. The token <2, A> is added to the output:
// Dictionary      Input             Output

// 0  |  ''        ABAABABAABAB      <0, A> <0, B> <1, A> <2, A>
// 1  |  A             ^^
// 2  |  B
// 3  |  AA
// 4  |  BA
// The next letter is B: it already appears in the dictionary and at position 2. We add the next letter which is A. BA already appears in the dictionary at position 4. We add the next letter which is A. BAA doesn't appear in the dictionary, so we add it to the next avaliable index. The token <4, A> is added to the output:
// Dictionary      Input             Output

// 0  |  ''        ABAABABAABAB      <0, A> <0, B> <1, A> <2, A> <4, A>
// 1  |  A               ^^^
// 2  |  B
// 3  |  AA
// 4  |  BA
// 5  |  BAA
// The next letter is B. It already appears in the dictionary at position 2. We add the next letter which is A. BA already appears in the dictionary at position 4. We add the next letter which is B. BAB doesn't appear in the dictionary, so we add it to the next avaliable index. The token <4, B> is added to the output:
// Dictionary      Input             Output

// 0  |  ''        ABAABABAABAB      <0, A> <0, B> <1, A> <2, A> <4, A> <4, B>
// 1  |  A                  ^^^
// 2  |  B
// 3  |  AA
// 4  |  BA
// 5  |  BAA
// 6  |  BAB
// We have now reached the end of the string. We have the output tokens: <0, A> <0, B> <1, A> <2, A> <4, A> <4, B>. Now we just return the tokens without the formatting: '0A0B1A2A4A4B'
// Note:

// If the string ends with a match in the dictionary, the last token should only contain the index of the dictionary. For example, 'ABAABABAABABAA' (same as the example but with 'AA' at the end) should return '0A0B1A2A4A4B3' (note the final 3).

// To decode, it just works the other way around.

// Examples
// Some more examples:

// Decoded                               Encoded

// ABBCBCABABCAABCAABBCAA                0A0B2C3A2A4A6B6 
// AAAAAAAAAAAAAAA                       0A1A2A3A4A  
// ABCABCABCABCABCABC                    0A0B0C1B3A2C4C7A6
// ABCDDEFGABCDEDBBDEAAEDAEDCDABC        0A0B0C0D4E0F0G1B3D0E4B2D10A1E4A10D9A2C
// Good luck :)


//my output:

// 0A0B2C3A2A4A6B6
// 0A1A2A3A4A
// 0A0B0C1B3A2C4C7A6
// 0A0B0C0D4E0F0G1B3D0E4B2D10A1E4A10D9A2C



const encoder = data => {

    let dictionary = {"" : 0};

    let prev = 0, index = 1, temp ="", out = "";

    for(let i = 0; i < data.length; i++){

        prev = dictionary[temp]; 
        temp += data.charAt(i);
    
        if(!dictionary[temp]){

            dictionary[temp] = index;
            out+= prev + data.charAt(i);
            index++;
            temp="";

        }   
    }

    if(temp.length != 0) out+= dictionary[temp];

    return out;

}



const decoder = data => {

    
    let out="", temp = "", current = 0, index = 1;

    const getKey = (obj, val) => Object.keys(obj).find(key => obj[key] === val);

    let dictionary = {0:""};

    for(let i = 0; i < data.length; i++){

        if(data.charAt(i).match(/[0-9]/)){

            temp += dictionary[data.charAt(i)];

        } else {

            temp += data.charAt(i);
        }
   
        if(!dictionary.hasOwnProperty(getKey(dictionary, temp))){

            dictionary[index] = temp;
            out+=temp;
            temp = "";
            index++;         

        }


    }

    if(temp.length!=0) out += dictionary[data.charAt(data.length-1)];

    console.log(temp.length);

    console.log(dictionary)

    return out;

    
}



//console.log(decoder("0A0B2C3A"));


// console.log(decoder("0A0B2C3A2A4A6B6"));
// console.log("input,", "0A0B1A2A4A4B");
// console.log("correct", "ABAABABAABAB");


console.log(encoder("ABCDDEFGABCDEDBBDEAAEDAEDCDABC"));



function encoder2(data) {
    let result = [], index = 0, indexes = {'': index}, prefix = '';
    for (let c of data) {
        prefix += c;
        if (! indexes[prefix]) {
            indexes[prefix] = ++index;
            result.push(indexes[prefix.slice(0, -1)], c);
            prefix = '';
        }
    }
    if (prefix)
        result.push(indexes[prefix]);
    return result.join('');
}

function decoder2(data) {
    let result = [], prefixes = [''], reg = /(\d+)(.?)/g, match;
    while ((match = reg.exec(data)) !== null) {
        let s = prefixes[+match[1]] + match[2];
        prefixes.push(s);
        result.push(s);
    }
    return result.join('');
}



function encoder3(data) {
    let keys = { '': 0 }, lastIndex = 0, substr = '', output = '';
    for (const char of data) {
      let newsubstr = substr + char;
      if (!keys.hasOwnProperty(newsubstr)) {
        let index = keys[substr];
        lastIndex++;
        keys[newsubstr] = lastIndex;
        output += index + char;
        substr = '';
      } else substr = newsubstr;
    }
    return substr ? output + keys[substr] : output;
  }
  
  function decoder3(data) {
    let keys = { [0]: '' }, lastIndex = 0, substr = '', output = '';
    (data.match(/[0-9]+|[A-Z]+/g) || []).forEach((char, i) => {
      if (i % 2 == 0) substr = keys[+char];
      else {
        substr += char;
        keys[++lastIndex] = substr;
        output += substr;
        substr = '';
      }
    });
    return output + substr;
  }
