/*var message = "Hello, World!";
message = "Goodbye, World";
message = 100;

var isPurple = true;
console.log("isPurple", isPurple);

if (isPurple === true) {
	//when the condition is true do this
	console.log("Is Purple!");
}  else {
	//when the condition is false do this
	console.log("Is Not Purple!");
}


var seconds = 1000;
var minutes = 60;
var hour = 60 * 60;
var day = hour * 24;
var year = day * 365;

var hoursinYear = year / hour;
console.log("hoursInYear", hoursinYear);
var minsInDecade = (year * 10) / minutes;
console.log("minsInDecade", minsInDecade);

var myage = 20;

var secsOld = myage * year;
console.log("myage", myage);

var isOld = 50;

if (myage < isOld) {
	console.log("Im young!");
} else {
	console.log("Im old!");
}
*/

//var colors = ["red", "blue", "yellow", "purple"];
//var luckyNumbers = [4, 8, 15, 16, 23, 42];
//var boolValues = [true];

//to add values to an array is...
//colors[4] = "orange";

//a better method is 
//colors.push("teal");

//console.log("Colors", colors);

//to take off from begining
//var lastItem = colors.pop();

//console.log("lastItem", lastItem);


//colors.unshift(); // add item
//colors.shift(); //remove from begginig, opposite of pop



//for (var index = 0; index < colors.length; index++) {
//	console.log("current color is ", colors[index]);
//}

//for (var i = 10; i <= 100; i=i*2) {
//	console.log(i);
//}

/*Write a for loop that increments the counter variable by 10 each time, and displays the value.
Write a for loop that divides the counter variable by 2 each time, and displays the value.
Augment the loop to insert each new value into an array
Write a loop that starts at 100 and decrements a variable by 1. 
If the number is even, add the number to the beginning of an array, else add it to the end of the array.*/

/*var students = ["mark", "matt", "sarah", "mary", "beth", "sef", "luz", "Josephine", "Peter"];

for (var i = 0; i < students.length; i += 10) {
	console.log("current Student ", students[i]);
}

for (var i = 0; i < students.length; i / 2) {
	console.log("current Student ", students[i])
}

var blabla = [];

for(var x = 100; x > 0; x-=1) {
	console.log("x", x);
	if (x % 2 === 0) {
		blabla.unshift(x);
	} else {
		blabla.push(x);
	}
}*/


/*var el = document.getElementById("container");
console.log("el", el);

el.innerHTML = "I love NSS";
var containerText = el.innerHTML;
console.log("containerText", containerText);*/

var sonnetElement = document.getElementById("sonnet");
var sonnetText = sonnetElement.innerHTML;
console.log("sonnetText", sonnetText);

var indexOfOrphans = sonnetText.indexOf("orphans")
console.log("indexOfOrphans", indexOfOrphans);
console.log("length of Sonnet", sonnetText.length);

sonnetText = sonnetText.replace("winter", "yultide");

sonnetElement.innerHTML = sonnetText;

sonnetElement.innerHTML = sonnetText.replace(/the/g, "a large");

















