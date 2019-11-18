// You are the "computer expert" of a local Athletic Association (C.A.A.). Many teams of runners come to compete. Each time you get a string of all race results of every team who has run. For example here is a string showing the individual results of a team of 5 runners:

// "01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17"

// Each part of the string is of the form: h|m|s where h, m, s (h for hour, m for minutes, s for seconds) are positive or null integer (represented as strings) with one or two digits. There are no traps in this format.

// To compare the results of the teams you are asked for giving three statistics; range, average and median.

// Range : difference between the lowest and highest values. In {4, 6, 9, 3, 7} the lowest value is 3, and the highest is 9, so the range is 9 − 3 = 6.

// Mean or Average : To calculate mean, add together all of the numbers in a set and then divide the sum by the total count of numbers.

// Median : In statistics, the median is the number separating the higher half of a data sample from the lower half. The median of a finite list of numbers can be found by arranging all the observations from lowest value to highest value and picking the middle one (e.g., the median of {3, 3, 5, 9, 11} is 5) when there is an odd number of observations. If there is an even number of observations, then there is no single middle value; the median is then defined to be the mean of the two middle values (the median of {3, 5, 6, 9} is (5 + 6) / 2 = 5.5).

// Your task is to return a string giving these 3 values. For the example given above, the string result will be

// "Range: 00|47|18 Average: 01|35|15 Median: 01|32|34"

// of the form:

// "Range: hh|mm|ss Average: hh|mm|ss Median: hh|mm|ss"

// where hh, mm, ss are integers (represented by strings) with each 2 digits.

// Remarks:

// if a result in seconds is ab.xy... it will be given truncated as ab.

// if the given string is "" you will return ""


function stat(strg) {

    const toSeconds = (h, m, s) => parseInt(h)*3600 + parseInt(m)*60 + parseInt(s);

    const reformat = (secs) => {

        let h,m,s;
        h = ~~(secs/3600);
        secs %= 3600;
        m = ~~(secs/60);
        s = secs % 60;

        return `${("0"+h).slice(-2)}|${("0"+m).slice(-2)}|${("0"+s).slice(-2)}`;
    };

    let out= strg.split(", ").map(e => {

        e = e.split("|");

        return toSeconds(e[0],e[1],e[2]);

    }).sort((a,b) => a-b);

    let range = out[out.length -1] - out[0];
    let average = Math.floor(out.reduce((acc,val) => acc + val)/out.length);
    let median = out.length % 2 === 0 ? Math.floor((out[out.length/2]+out[out.length/2-1])/2) : out[Math.floor(out.length/2)];

    return `Range: ${reformat(range)} Average: ${reformat(average)} Median: ${reformat(median)}`;

}


console.log(stat("01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17"));
console.log(stat("02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41"));


console.log(~~(4559/3600));


function stat2(strg) {
    const addZero=s=>('0'+s).slice(-2);  
    const getStr=n=>addZero(Math.floor(n/3600))+'|'+addZero(Math.floor(n%3600/60))+'|'+addZero(n%60);
    if(!strg)return '';
    var arr=strg.split(', ')
                .map(a=>a.replace(/(\d+)\|(\d+)\|(\d+)/,function(a,b,c,d){return b*3600+c*60+d*1})).sort((a,b)=>a*1-b*1);
    var len=arr.length;
    var range=arr[len-1]-arr[0];
    var average=Math.floor(arr.reduce((s,v)=>s+v*1,0)/len);
    var median=len%2===1?arr[(len-1)/2]:Math.floor((arr[len/2]*1+arr[len/2-1]*1)/2);
    return 'Range: '+getStr(range)+' Average: '+getStr(average)+' Median: '+getStr(median);
}