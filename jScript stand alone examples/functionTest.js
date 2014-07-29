
function add (x,y){
    return x+y;
}

console.log(add(4,8));

var add2 = function(x,y) { return x+y; } // anonymous function has to be defined before used

console.log(add2 (7,8))

/*
Local versus Global variables
 */
/*
(function(){
    // all your code would go here.  Still not sure how/why this is good
}) ();
*/

x=5;
y=6;

var obj = {
    x: 3,
    y: 2
}

console.log(add3.call(obj));
//console.log(add3());

function add3(){
    console.log(this);
    return this.x + this.y;
}

function add4(){
    var sum = 0;
    for (var i=0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log (add4(2,4,6,8,10));
console.log (add4(2,4, add4(6,8,19)));

[2,4,6].forEach(function (val, idx) {
    console.log(idx, val);
})

var sum=0;
[2,4,6].forEach(function (val) {
    sum += val;
 })

console.log (sum);

var array = [1,2,3,4];

console.log(array);
console.log(array.toString());
console.log(array.join("--"));

function join(arr, str){
    var output = "";
    arr.forEach(function(item, idx){
        output += item;
        if (idx < arr.length-1) output += str;
    })
    return output;
}

console.log (join(array,"---"));

var array_string="1,2,3,4";
console.log(array_string
    .split(",")
    .map(function(str){
        return parseFloat(str)
    }));

var item = [];
array_string.split(",").forEach(function(item, i){
    item[i] = parseFloat(item);
})

console.log(item);
