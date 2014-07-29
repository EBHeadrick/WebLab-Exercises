/**
 * Created by EB on 6/23/2014.
 *
 * http://    protocols
 * ws://      new one ??
 * https://   secure http
 * user@something.com  domain name
 * :80  port usually left off because 80 is default
 * /path/to/file.html
 * #id
 * ?key=val&key2=val2  meta data
 *
 * string.decodeURIComponent
 *       .encodeURI
 *
 *
 */

var pi = "3.14";

console.log(parseInt(pi));
console.log(parseFloat(pi));

x="y=4";
eval(x);
console.log(y);

str = "string";
console.log(str.indexOf("ing"));  //should be 3

email="ebheadrick@hotmail.com";
var idx = email.indexOf('@');
console.log(email.substring(idx+1, email.length));

regex = /@(.+?)$/;
console.log(email.match(regex));

function upperCaseFirstLetter(str){
    var words = str.split(" ")
        ;
    var mixCase = [];

    words.forEach(function(word){
        //word = word.toLowerCase();
        word = word[0].toUpperCase()+ word.substring(1).toLowerCase();
        //console.log(word);
        mixCase.push(word)
    })

    mixCase.push(words.map(function(word){
        return word[0].toUpperCase()+ word.substring(1).toLowerCase();
    }).join(" "));

    return mixCase.join(' '); // join all the array elements into a string seperated by a space
}

console.log(upperCaseFirstLetter("ELLEN b headrick"));
console.log(upperCaseFirstLetter("bob hope"));
console.log(upperCaseFirstLetter("linda miller-Hart"));
