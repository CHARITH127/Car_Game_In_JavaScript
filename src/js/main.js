const blueCar = $("#blueCar").get(0);
const raceCar = $("#raceCar").get(0);
const coount = 0;


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
    if (e.key == "ArrowLeft") {
        var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"));
    }
    if (raceCarLeft < 260) {
        raceCar.style.left = (raceCarLeft + 130) + "px"
    }
});

/*
window.keydown(function (e) {

})*/
