

document.getElementById("demo").innerHTML = "Hello Shanton!";
document.getElementById("hi").innerHTML = "Hello World!";


// Create an html filename , create a paragraph describing what document onject module is .. below the paragraph you must have a red button and a blue button.

// When you click on the blue button the paragraph text color should change to blue, same goes for red.

// Write a JS Function "Change Color"

function changeColor (newColor) {
    let btn = document.getElementById('text');
    btn.style.color = newColor;
}

function refreshPage(){
    window.location.reload();
}

function displayDate() {
    document.getElementById("date").innerHTML = Date();
}