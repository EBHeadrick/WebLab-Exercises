/**
 * Created by EB on 7/8/2014.
 */

var passedInfo =
    "http://localhost:63342/github/WebLab-Exercises/Rank%20Select/gohere.html?new-site=Home+Boulder+CO&stars=1star";
//    "http://localhost:63342/github/WebLab-Exercises/Rank%20Select/gohere.html?new-site=Rocky+Mountain+Nation+Park+CO&stars=1star";
//    "http://localhost:63342/github/WebLab-Exercises/Rank%20Select/gohere.html?new-site=Mount+Rushmore+SD&stars=5star";
//    "http://localhost:63342/github/WebLab-Exercises/Rank%20Select/gohere.html?";
var star1 = "&#9733;&#9734;&#9734;&#9734;&#9734;",
    star2 = "&#9733;&#9733;&#9734;&#9734;&#9734;",
    star3 = "&#9733;&#9733;&#9733;&#9734;&#9734;",
    star4 = "&#9733;&#9733;&#9733;&#9733;&#9734;",
    star5 = "&#9733;&#9733;&#9733;&#9733;&#9733;";

//    console.log(passedInfo.split("?")[1].split("&"));

var bothAttr = passedInfo.split("?")[1].split("&"),
    spanStar = "<span class='stars'>",
    endSpan = "</span>",
    index = 0;

if (Array.isArray(bothAttr)) {
//    console.log("Data correct");
    console.log('<li class="rankRow">');
    bothAttr.forEach(function(attribute, index){
//        console.log(attribute.split("=")[1].replace(/\+/g, " "));
        var attrValue = attribute.split("=")[1].replace(/\+/g, " ");
        switch (attrValue) {
            case "1star": {
                console.log(spanStar+star1+endSpan);
//                    document.write(spanStar+star1+endSpan);
                break;}
            case "2star": {
                console.log(spanStar+star2+endSpan);
//                    document.write(spanStar+star1+endSpan);
                break;}
            case "3star": {
                console.log(spanStar+star3+endSpan);
//                    document.write(spanStar+star1+endSpan);
                break;}
            case "4star": {
                console.log(spanStar+star4+endSpan);
//                    document.write(spanStar+star1+endSpan);
                break;}
            case "5star": {
                console.log(spanStar+star5+endSpan);
//                    document.write(spanStar+star1+endSpan);
                break;}

                default: {console.log("<span class='site'>"+attrValue+"</span>"); break;}
                }
    })
    console.log("</li>");
} else { console.log("Data NOT clean");}


