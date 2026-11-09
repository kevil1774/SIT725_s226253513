function changeText() {
    var myArray = ["Text 1", "Text 2", "Text 3", "Text 4", "Text 5"];

    var randomNumber = getRandomNumberBetween(0, myArray.length - 1);

    console.log(randomNumber);

    document.getElementById("heading").innerHTML = myArray[randomNumber];
}

function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
