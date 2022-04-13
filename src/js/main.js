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

    /*car shift to the right side*/
    if (e.key == "ArrowRight") {
        var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"));
        console.log(raceCarLeft);
        if (raceCarLeft < 150) {
            raceCar.style.left = (raceCarLeft + 30) + "px"
        }
    }


    /*car shift to the left side*/
    if (e.key == "ArrowLeft") {
        var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"));
        console.log(raceCarLeft);
        if ((raceCarLeft <= 0 || raceCarLeft > 0) & raceCarLeft > -150) {
            raceCar.style.left = (raceCarLeft - 30) + "px"
        }
    }

});

/*
window.keydown(function (e) {

})*/
