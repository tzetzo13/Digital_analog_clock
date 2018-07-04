//Selecting the elements in the DOM
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");




function runTheClock() { 
//Getting the current time 
var date = new Date();
let currentHour = date.getHours();
let currentMinutes = date.getMinutes();
let currentSeconds = date.getSeconds();

//Setting the the degrees of the "hands" according to the current time
let hrPosition = currentHour*360/12 + (currentMinutes*(360/60)/12);
let minPosition = currentMinutes*360/60 + (currentSeconds*(360/60)/60);
let secPosition = currentSeconds*360/60;

//Updating the inline style of the dom elements 
HOURHAND.style.transform = "rotate(" +hrPosition + "deg)";
MINUTEHAND.style.transform = "rotate(" +minPosition + "deg)";
SECONDHAND.style.transform = "rotate(" +secPosition + "deg)";
}




var interval = setInterval(runTheClock, 1000);