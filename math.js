

var score = 0;
function confirms() {
var value1 = document.getElementById("one").value;
var value2 = document.getElementById("two").value;
var value3 = document.getElementById("three").value;
var value4 = document.getElementById("four").value;
var value5 = document.getElementById("five").value;
document.getElementById("confirm").style.display = "none";
if (value1 == "" && value2 == "" && value3 == "" && value4 == "" && value5 == "") {
    document.getElementById("sol").innerHTML = "ከከበዶ አሰራሩን ይዩ"
}
    if(value1 == "4") {
        document.getElementById("one").style.background = "lightgreen";
        score++;
    }
    if (value1 !== "4") {
        document.getElementById("one").style.background = "red";
    }
    if (value2 == "6") {
        document.getElementById("two").style.background = "lightgreen";
        score++;
    }
    if (value2 !== "6") {
        document.getElementById("two").style.background = "red";
    }
    if (value3 == "14") {
        document.getElementById("three").style.background = "lightgreen";
        score++
    }
    if (value3 !== "14") {
        document.getElementById("three").style.background = "red";
    }
    if (value4 == "19") {
        document.getElementById("four").style.background = "lightgreen";
        score++;
    }
    
    if (value4 !== "19") {
        document.getElementById("four").style.background = "red";
    }
    if (value5 == "13") {
        document.getElementById("five").style.background = "lightgreen";
        score++;
    }
    
    if (value5 !== "13") {
        document.getElementById("five").style.background = "red";
    }
    if (score == 1) {
        document.getElementById("confirm").innerHTML = score + " " + "ጥያቄ ተመልሷል";
    }
document.getElementById("sol").style.display = "block";
if(score > 1) {
    document.getElementById("confirm").innerHTML = score + " " + "ጥያቄዎች ተመልሰዋል";
}
}
function solution() {
    var value1 = document.getElementById("one").value;
var value2 = document.getElementById("two").value;
var value3 = document.getElementById("three").value;
var value4 = document.getElementById("four").value;
var value5 = document.getElementById("five").value;
document.getElementById("confirm").style.display = "none";
document.getElementById("correct").style.display = "block"
}
