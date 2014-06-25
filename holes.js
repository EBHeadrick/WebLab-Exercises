/**
 * Created by EB on 6/24/2014.
 */

var lookup = { // look up table with number of holes in each letters might want to put it in the function
    0:1, 4:1, 6:1, 8:2, 9:1,  // numbers
    a:1, b:1, d:1, e:1, g:1, o:1, p:1, q:1,  // lowercase
    A:1, B:2, D:1, P:1, Q:1, R:1 // uppercase
};

function countHoles(str){
    var
        count= 0;
    for (i=0; i <str.length; i++){
        var num = lookup[str[i]];
        if(isNaN(num)) {num=0};
        count += num;
    }
    console.log("Your String : " + str );
    return count;
}


console.log("Holes = "+ countHoles("Ellen B Headrick"));
console.log("Holes = "+ countHoles("Can I steal this code? Or do I want to steal this code?"));

var holecount = (function(lookup){
    return function(text){
        return text
            .split("")
            .map(function(char) { return lookup[char] || 0 })
            .reduce(function(prev, curr){ return prev + curr }, 0)
    }
})({
    0:1, 4:1, 6:1, 8:2, 9:1,  // numbers
    a:1, b:1, d:1, e:1, g:1, o:1, p:1, q:1,  // lowercase
    A:1, B:2, D:1, P:1, Q:1, R:1 // uppercase
});

console.log("other way: " + holecount ("Ellen B Headrick"));
