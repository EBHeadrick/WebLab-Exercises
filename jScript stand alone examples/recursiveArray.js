/**
 * Created by EB on 6/25/2014.
 */

var arr=[1,2,[3,4],[5,6,7,[8,9]]];

function flattenArray(myArray){
    var my2Array = [];
    //console.log(Array.isArray(myArray));
    if(Array.isArray(myArray)) {
        myArray.forEach(function(array){
            //console.log(array);
            if(Array.isArray(array)){
                //flattenArray(array);
                //my2Array.push(array);
                my2Array.push.apply(my2Array, flattenArray(array));
                // OR  my2Array = my2Array.concat(flattenArray(array));
                // OR  my2Array.push.apply(my2Array, flattenArray(array));
           }
            else{
                //console.log("push this: "+array);
                my2Array.push(array);}
        })
    }
    console.log(my2Array)
    return my2Array;
}

console.log("Flat : " + flattenArray(arr));
