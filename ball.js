/*

width = 100
height = 200
ball {x:  , y:  }  add ob = out bounds

 */

var field = {
    top: 0
  , left:0
  , width: 100
  , height: 100
    },
   ball = {x:50, y: 50, ob: {}};
   ball2 = {x: 150, y: 150, ob: {}};
// ball = {x:50, y: 50};

console.log(isBallInBounds(ball), ball.ob);
console.log(isBallInBounds(ball2)
    , ball2.ob);

function isBallInBounds(ball){

    if (ball.x < field.left) return ball.ob.left = true;  //false;
    if (ball.x > field.left + field.width) return ball.ob.right = true; //false;
    if (ball.y < field.top) return ball.ob.top = true;  //false;
    if (ball.y > field.top + field.height) return ball.ob.bottom = true;  //false;
    //else return "In Bounds";

    var isOut = false;
    for (var side in ball.ob){
        if (ball.ob[side]) isOut = true;
    }
    return !isOut;

    };


