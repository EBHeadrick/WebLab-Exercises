/**
 * Created by EB on 6/19/2014.
 */

var person = {
    name: "Joey",
    age: 13
};

function ageCheck(person, age){
    if (!person) {return false;}
    if (!age){age = 21;}
    if (person.age > age) {
        return true;
    } else {
        return false;
    }
}

console.log(ageCheck(person));
console.log(ageCheck(person, 30));
console.log(ageCheck(person,3));
console.log(ageCheck());