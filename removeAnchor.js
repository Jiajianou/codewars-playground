// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples:

// // returns 'www.codewars.com'
// removeUrlAnchor('www.codewars.com#about')

// // returns 'www.codewars.com?page=1' 
// removeUrlAnchor('www.codewars.com?page=1') 


function removeUrlAnchor2(url){

    console.log(url.indexOf("?"));

    return url.slice(0, url.indexOf("#"));
}

const removeUrlAnchor = url => url.indexOf("#") === -1 ? url : url.slice(0, url.indexOf("#"));



console.log(removeUrlAnchor('www.codewars.com#about'));