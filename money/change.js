/**
 * Created by EB on 7/21/2014.
 */

//  function to return change  input 10, 5.43
//    return and object  twenties tens fives ones quarters dimes nickels pennies

function returnChange (money) {

// use MOD it gives you the remainer

    var change = {
        twenties : 0,
        tens : 0,
        fives : 0,
        ones : 0,
        quarters : 0,
        dimes : 0,
        nickels : 0,
        pennies : 0
    };
    var moneyAfter = {
        div : 0,
        rem : 0
    };
    var changeKind = [2000, 1000, 500, 100, 25, 10, 5, 1];
    var lookup = {
        twenties : 2000,
        tens : 1000,
        fives : 500,
        ones : 100,
        quarters : 25,
        dimes : 10,
        nickels : 5,
        pennies : 1
    };

    moneyAfter.rem = money*100; // get into no decimal cents

//    moneyAfter = domination(money, 2000);
//    change.twenties = moneyAfter.div;
//    moneyAfter = domination(moneyAfter.rem, 1000);
//    change.tens = moneyAfter.div;

    for (var units in lookup) {
        moneyAfter = domination(moneyAfter.rem, lookup[units]);
        change[units] = moneyAfter.div;
    }

    return change;

}

function domination (money, whichDom) {
    var returnMoney = {
        div: 0,
        rem: 0
    };
    returnMoney.div = Math.floor(money/whichDom);
    returnMoney.rem = money % whichDom;
//    console.log(returnMoney +" "+whichDom);
    return returnMoney;

}

console.log(returnChange(57.73));
console.log(returnChange(40));
console.log(returnChange(5.43));