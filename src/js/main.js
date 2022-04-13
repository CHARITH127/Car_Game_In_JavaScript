const blueCar = $("#blueCar").get(0);
const raceCar = $("#raceCar").get(0);
const game = $("#game").get(0);
const count = 0;


/*moving the blue cars*/
blueCar.addEventListener("animationiteration", function () {
    var random = ((Math.floor(Math.random() * 5)) * 130)
    /*to prevent blue car has touch the left barrier*/
    if (random == 0) {
        blueCar.style.left = 98 + "px";
    }
    /*to prevent blue car has touch the right barrier*/
    else if (random == 520) {
        blueCar.style.left = 320 + "px";
    } else {
        blueCar.style.left = random + "px";
    }
});

/*moving racing car*/
window.addEventListener("keydown", function (e) {

    /*car shift to the right side*/
    if (e.key == "ArrowRight") {
        var raceCarPositionByLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"));

        if (raceCarPositionByLeft <= 414) {
            raceCar.style.left = (raceCarPositionByLeft + 30) + "px"
            console.log(raceCarPositionByLeft +"right key");
        }
    }


    /*car shift to the left side*/
    if (e.key == "ArrowLeft") {
         raceCarPositionByLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"));

        if (raceCarPositionByLeft >= 54) {
            raceCar.style.left = (raceCarPositionByLeft - 30) + "px"
            console.log(raceCarPositionByLeft +"left key");
        }
    }

});

/*game over function*/
function gameOver() {
    var blueCarTop = window.getComputedStyle(blueCar).getPropertyValue("top");
    var blueCarLeft = window.getComputedStyle(blueCar).getPropertyValue("left");
    var raceCarLeft = window.getComputedStyle(raceCar).getPropertyValue("left");
    if ((raceCarLeft==414+"px") |(raceCarLeft==54+"px")) {
        alert("game over");
    }
}

setInterval(gameOver, 10);
