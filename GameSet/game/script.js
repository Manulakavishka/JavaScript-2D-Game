//console.log("hi");

function car1MoveAnimation() {

    moveSet1X = -30;

    moveDriveID.style.backgroundPositionX = moveSet1X + "px";
    moveDriveID.style.backgroundPositionY = moveSet1Y + "px";


}

var car1MoveAnimationNumber = 0;
var car2MoveAnimationNumber = 0;

var car1MoveAnimationStatus = false;
var car2MoveAnimationStatus = false;

function car2MoveAnimation() {

    moveSet2X = -30;

    moveDriveID2.style.backgroundPositionX = moveSet2X + "px";
    moveDriveID2.style.backgroundPositionY = moveSet2Y + "px";


}


function keyAnimation(event) {
    var key = event.which

    if (key == 37) {
        //arrow left

        if (car1LeftAnimationStatus == false) {

            car1LeftAnimationStatus = true;
            car1RightAnimationStatus = false;

            if (car1RightAnimationNumber != 0) {

                clearInterval(car1RightAnimationNumber);
                car1RightAnimationNumber = 0;
            }
            car1LeftAnimationNumber = setInterval(car1LeftAnimation, 90);

        }





    } else if (key == 39) {
        // arrow right

        if (car1RightAnimationStatus == false) {

            car1RightAnimationStatus = true;
            car1LeftAnimationStatus = false;

            if (car1LeftAnimationNumber != 0) {

                clearInterval(car1LeftAnimationNumber);
                car1LeftAnimationNumber = 0;
            }

            car1RightAnimationNumber = setInterval(car1RightAnimation, 90);

        }






    } else if (key == 83) {
        //s

        if (car2LeftAnimationStatus == false) {

            car2LeftAnimationStatus = true;
            car2RightAnimationStatus = false;

            if (car2RightAnimationNumber != 0) {


                clearInterval(car2RightAnimationNumber);
                car2RightAnimationNumber = 0;
            }

            car2LeftAnimationNumber = setInterval(car2LeftAnimation, 90);
        }





    } else if (key == 70) {
        //f
        if (car2RightAnimationStatus == false) {

            car2RightAnimationStatus = true;
            car2LeftAnimationStatus = false;

            if (car2LeftAnimationNumber != 0) {


                clearInterval(car2LeftAnimationNumber);
                car2LeftAnimationNumber = 0;
            }

            car2RightAnimationNumber = setInterval(car2RightAnimation, 90);
        }




    }
}

function car1LeftAnimation() {


    if (car1MarginTop != 0) {

        clearInterval(car1MoveAnimationNumber);

        moveSet1X = 560;
        moveDriveID.style.backgroundPositionX = moveSet1X + "px";
        moveDriveID.style.backgroundPositionY = moveSet1Y + "px";

        car1MarginTop -= 15;
        moveDriveID.style.marginTop = car1MarginTop + "px";
    } else {
        if (car1LeftAnimationNumber != 0) {
            clearInterval(car1LeftAnimationNumber);

            car1LeftAnimationNumber = 0;

            car1MoveAnimationNumber = setInterval(car1MoveAnimation, 90);
        }
    }

}

var moveDriveID = document.getElementById("car");

var moveSet1X = 0;
var moveSet1Y = -280;

var car1MarginTop = 0;

var car1RightAnimationNumber = 0;
var car1LeftAnimationNumber = 0;

var car1RightAnimationStatus = false;
var car1LeftAnimationStatus = false;

function car1RightAnimation() {

    if (car1MarginTop != 180) {

        clearInterval(car1MoveAnimationNumber);

        moveSet1X = 295;
        moveDriveID.style.backgroundPositionX = moveSet1X + "px";
        moveDriveID.style.backgroundPositionY = moveSet1Y + "px";

        car1MarginTop += 15;
        moveDriveID.style.marginTop = car1MarginTop + "px";
    } else {
        if (car1RightAnimationNumber != 0) {
            clearInterval(car1RightAnimationNumber);

            car1RightAnimationNumber = 0;

            car1MoveAnimationNumber = setInterval(car1MoveAnimation, 90);
        }
    }

}

function car2RightAnimation() {



    if (car2MarginTop != 180) {

        clearInterval(car2MoveAnimationNumber);
        // car2MoveAnimationStatus = false;

        moveSet2X = 295;
        moveDriveID2.style.backgroundPositionX = moveSet2X + "px";
        moveDriveID2.style.backgroundPositionY = moveSet2Y + "px";


        car2MarginTop += 15;
        moveDriveID2.style.marginTop = car2MarginTop + "px";
    } else {
        if (car2RightAnimationNumber != 0) {
            clearInterval(car2RightAnimationNumber);

            car2RightAnimationNumber = 0;

            car2MoveAnimationNumber = setInterval(car2MoveAnimation, 90);
        }
    }
}

var moveDriveID2 = document.getElementById("car2");
var moveSet2X = 0;
var moveSet2Y = -810;

var car2MarginTop = 0;

var car2RightAnimationNumber = 0;
var car2LeftAnimationNumber = 0;

var car2RightAnimationStatus = false;
var car2LeftAnimationStatus = false;


function car2LeftAnimation() {


    if (car2MarginTop != 0) {


        clearInterval(car2MoveAnimationNumber);

        moveSet2X = 560;
        moveDriveID2.style.backgroundPositionX = moveSet2X + "px";
        moveDriveID2.style.backgroundPositionY = moveSet2Y + "px";

        car2MarginTop -= 15;
        moveDriveID2.style.marginTop = car2MarginTop + "px";
    } else {
        if (car2LeftAnimationNumber != 0) {
            clearInterval(car2LeftAnimationNumber);

            car2LeftAnimationNumber = 0;


            car2MoveAnimationNumber = setInterval(car2MoveAnimation, 90);



        }
    }
}


var boxCount = 0;
var score = 0;
var h1Score = document.createElement("h1");

function objectAnimation() {

    var h1 = document.createElement("h1");
    h1.innerHTML = "Score : ";
    h1.className = "score";
    var h = document.getElementById("d1").appendChild(h1);




    boxMultiplyId = setInterval(function() {

        score++;

        h1Score.innerHTML = score;
        h1Score.className = "score1";
        var hz = document.getElementById("d1").appendChild(h1Score);

        var box = document.createElement("div");

        // box.style.width = "100px";
        // box.style.height = "100px";
        // box.style.backgroundColor = "#CECECE";
        // box.style.marginTop = "30px";
        // box.style.position = "absolute";

        box.style.width = "100px";
        box.style.height = "100px";
        box.style.backgroundImage = "url('zombieWalk.png')";
        box.style.marginTop = "30px";
        box.style.position = "absolute";
        box.style.backgroundRepeat = "repeat-x";

        var x = 0;

        setInterval(function() {
            x += 100;
            box.style.backgroundPositionX = x + "px";
            box.style.position = "absolute";

        }, 200);


        boxCount++;

        box.id = boxCount + "box";



        var marginLeftRandom = Math.floor(Math.random() * 1300);
        var marginLeftOrRight = Math.floor(Math.random() * 100);
        if (marginLeftRandom > 500 && marginLeftOrRight >= 50) {
            box.style.marginLeft = 1300 + "px"; //marginLeftRandom
        } else if (marginLeftRandom > 500) {
            box.style.marginTop = 210 + "px";
            box.style.marginLeft = 1300 + "px"; //marginLeftRandom +
        } else {
            box.style.marginLeft = 1300 + "px";
            if (marginLeftRandom > 250 && marginLeftOrRight <= 50) {
                box.style.marginTop = 210 + "px";
            }
        }

        var marginCar1OrCar2 = Math.floor(Math.random() * 1000);

        if (marginCar1OrCar2 > 500) {
            var d1 = document.getElementById("d1").appendChild(box);
        } else {
            var d1 = document.getElementById("d2").appendChild(box);
        }

        var bb = 0;

        boxAnimationId = setInterval(function() {

            var x = parseInt(box.style.marginLeft) - 1;
            box.style.marginLeft = x + "px";

            var y = parseInt(box.id);

            // alert(x);

            //260px
            //-110px
            if (x <= 260 && x >= -110 && marginLeftOrRight >= 50 && marginCar1OrCar2 > 500 && car1MarginTop < 120 ||
                x <= 260 && x >= -110 && marginLeftOrRight <= 50 && marginCar1OrCar2 > 500 && car1MarginTop > 70
            ) {

                var boxId = box.id;
                bb = 2;
                d1.parentNode.removeChild(box);




            } else if (x <= 260 && x >= -110 && marginLeftOrRight >= 50 && marginCar1OrCar2 < 500 && car2MarginTop < 120 ||
                x <= 260 && x >= -110 && marginLeftOrRight <= 50 && marginCar1OrCar2 < 500 && car2MarginTop > 70) {


                bb = 1;


                //box.remove("box" + boxCount);
                d1.parentNode.removeChild(box);


            } else if (bb == 0 && x < -75) {
                boxStop();
                endGame();

            }
        }, 1);

    }, 2000);


}

var boxAnimationId = 0;
var boxMultiplyId = 0;
var boxAnimationIdNumber = 0;
var boxAnimationIdName;

function boxStop() {
    // clearInterval(boxAnimationId);

    clearInterval(boxMultiplyId);
    //endGame();

}

function endGame() {

    var body1 = document.getElementById("bodyy");

    var div1 = document.getElementById("div1");
    var hr1 = document.getElementById("hr1");
    var d1 = document.getElementById("d1");
    div1.remove();

    var div2 = document.createElement("div");
    div2.style.backgroundColor = "red";
    // div2.style.width = "100px";
    div2.style.height = "100vh";

    h1Score.innerHTML = score;
    h1Score.className = "score2";

    var scoreName = document.createElement("h1");
    scoreName.innerHTML = "Score : ";
    scoreName.className = "score3";

    var gameEnd = document.createElement("h1");
    gameEnd.innerHTML = "Game Over!";
    gameEnd.className = "score4";

    var btn = document.createElement("button");
    btn.innerHTML = "Back To Main";
    btn.className = "btn";

    btn.onclick = function() {
        location.href = "../../index.html";
    }

    body1.appendChild(div2);
    div2.appendChild(h1Score);
    div2.appendChild(scoreName);
    div2.appendChild(gameEnd);
    div2.appendChild(btn);

    var audio = new Audio("GameOver.mp3");
    audio.play();

}

var road1 = document.getElementById("d1");
var road2 = document.getElementById("d2");

var moving = 0;

function backgroundMoving() {

    setInterval(function() {

        moving -= 6;

        road1.style.backgroundPositionX = moving + "px";
        road2.style.backgroundPositionX = moving + "px";


    }, 60);

}