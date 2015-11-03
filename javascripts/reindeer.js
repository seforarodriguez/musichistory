var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("reindeer");

var output = "";

/*
  YOUR ASSIGNMENT
  ----------------------------------------
  Loop through all the reindeer in the array, and add the 
  name of the reindeer to the single HTML <div> element provided.
  The name of the reindeer should be prepended with the corresponding
  color from the other array.
  
  For example:
    Blue Dasher
    Red Dancer
    etc..
*/
/*for (i = 0; i < reindeer.length; i++) {
  for (x = 0; x < colors.length; x++) {
    coloredReindeer = colors[i] + " " + reindeer[x]
  }

}
var currentReindeer = reindeer [i];
var currentColor = colors[x]

hohohoElement.innerHTML = coloredReindeer;*/

/*var output = "";

for (var index = 0; index < reindeer.length; index++) {
  var currentReindeer = reindeer[index];
  var currentColor = colors[index];

  output = output + "<div style='color:" + currentColor + "'>";
  output = output + currentColor + " " + currentReindeer;
  output = output + "</div>";
}

console.log(output);

hohohoElement.innerHTML = output;*/

for (var i = 0; i < reindeer.length; i++) {
 var name = colors[i] + " " + reindeer[i];
 var code = "<div style='color: " + colors[i] + ";'>" + name + "</div>"  ;
 hohohoElement.innerHTML = hohohoElement.innerHTML + code;
}





