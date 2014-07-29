
console.log("Hello Ellen, how are you?");

["Hi EB","Have a good day!","Any amount of vars in the array"].forEach(function term(x){console.log(x)});

var y=["Hi EB","Have a good day!","Any amount of vars in the array"];
console.log(y);

var me = {
    name: "Ellen B Headrick",
    nickname: "EB",
    age: "too old"
};
var i;

for (i in me)console.log(i+" : ",me[i]);

//me (function term(x) {console.log(x)});
/*
Comments :-)

syntax
var x=value  ,  y  , ... ;

switch () {
    case : ;
    case : ;
    default : ;
}

x=2, y="2"  x==y true  x===y false
*/
var people = ["nate", "Sam", "Ellen"],
    i;
for (i=0; i<people.length; i++){
    console.log(people[i]);
}