/**
 * Created by EB on 6/19/2014.
 */

// define variables

var names = ["Ellen", "Cameron", "Lilly", "Nate"],
    message = "Hello, ",
    GroupOfNames = ""
    ;
console.log(message + names[3]);

names.forEach(function(theName){
    console.log(theName);
    GroupOfNames += theName +", ";
});
console.log(GroupOfNames);

names.push("Rebecca");
console.log(names);
names.pop();
console.log(names);

names = [];
console.log(names);

var playground = {
    name: "Salsburg",
    location: "North Boulder",
    equipment: ["swings","climbing wall", "slide"]
};
console.log (playground);

playground.location = "19th St and Elder Ave";

console.log (playground);


