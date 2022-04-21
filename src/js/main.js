const blueCar = $("#blueCar").get(0);
const raceCar = $("#raceCar").get(0);
const game = $("#game").get(0);
var result = $("#result").get(0);
const score = $("#score").get(0);
var count = 0;

/*blue car move*/
blueCar.addEventListener("animationiteration", function () {
    var random = ((Math.floor(Math.random() * 3)) * 130)
    blueCar.style.left = random + "px";
    count++
    changeTheAnimationSpeed();

})

/*race car move*/
window.addEventListener("keydown", function (e) {
    /*car moving right side*/
    if (e.key == "ArrowRight") {
        var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"))
        if (raceCarLeft < 260) {
            raceCar.style.left = (raceCarLeft + 130) + "px"
        }

    }
    ;

    /*car moving left side*/
    if (e.key == "ArrowLeft") {
        var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"))
        if (raceCarLeft > 0) {
            raceCar.style.left = (raceCarLeft - 130) + "px"
        }

    }
})


/*game over*/
function gameOver() {
    var blueCarTop = parseInt(window.getComputedStyle(blueCar).getPropertyValue("top"))
    var blueCarLeft = parseInt(window.getComputedStyle(blueCar).getPropertyValue("left"));
    var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"));
    if ((blueCarLeft === raceCarLeft) && (blueCarTop >= 670)) {
        result.style.display = "block";
        game.style.display = "none";
        score.innerHTML = `score : ${count}`
        count = 0;
    }
}

setInterval(gameOver, 5);

/*stages in game*/
function changeTheAnimationSpeed() {
    if (count == 10) {
        blueCar.style.animationDuration = "2000ms"
    }else if (count == 20){
        blueCar.style.animationDuration = "1000ms"
    }else if (count == 30){
        blueCar.style.animationDuration = "900ms"
    }else if (count == 40){
        blueCar.style.animationDuration = "8000ms"
    }else if (count>50){
        blueCar.style.animationDuration = "5000ms"
    }
}

/*game restart*/
$("#btnRestart").click(function () {
    location.reload();
});
