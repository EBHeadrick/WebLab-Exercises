/**
 * Created by EB on 7/21/2014.
 *
 * Pass in a string and count the words.
 *
 */

var myString = "Hello, how are you today?";

function wordCount (myString) {

    var returnStringCount = 'Your string is : ' + myString + ' has a word count of : ';

    if (!myString || typeof myString !== "string") {
        //  only checks for null not that if it is a number
//        console.log("not a string we can't count");
        return returnStringCount + "not a string we can't count";
    }

//    myString = myString.trim();
//    console.log(myString);

//    console.log(myString.trim().split(" "));  // won't catch multiple spaces so regular expressions are used.
//    console.log(myString.trim().split(/\s+/));
//    console.log(myString.trim().split(" ").length);
//    console.log(myString.trim().split(/\s+/).length);

    return returnStringCount+myString.trim().split(/\s+/).length;

}

console.log(wordCount(myString));
console.log(wordCount(''));
console.log(wordCount('  a   b    c   d    e  '));
console.log(wordCount(1234));

