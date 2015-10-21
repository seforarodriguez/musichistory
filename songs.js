
var songs = [];


songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

console.log(songs);

songs.unshift("Be My Husband - Ed Sheeran");
songs.push("Bright - Echosmith");

console.log(songs);

var songElement = document.getElementById("song-list")

for (i = 0;i < songs.length; i++) {
	var songlist = songs[i];

	characterRemoval = songlist.replace(/[@*(!]/g, "").replace(">", "-");
	newsongs = characterRemoval;	
	console.log(newsongs);

	var code = "<h4>" + newsongs + "</h4>";

 songElement.innerHTML= songElement.innerHTML + code;


}

var addingSong = document.getElementById("AddBox");
var addButton = document.getElementById("AddButton");
var blueBox = document.getElementById("blue-box"); 
var yellowBox = document.getElementById("yellow-box");
var returnB = document.getElementById("returnList");
var addToListB = document.getElementById("Add");
var addSongName = document.getElementById("songName");

addButton.addEventListener("click", function(){
	addingSong.classList.add("visible");
	blueBox.classList.add("hidden");
	yellowBox.classList.add("hidden");
});

returnB.addEventListener("click", function(){
	addingSong.classList.remove("visible");
	blueBox.classList.add("visible");
	yellowBox.classList.add("visible");
 });

addToListB.addEventListener("click", function(add){
	var formatAddSongName = "<h4>" + addSongName.value + "</h4>";
	songElement.innerHTML = songElement.innerHTML + formatAddSongName;

});

// var homeLink = document.getElementById("link-home");
// var homeView = document.getElementById("home-view");

// homeLink.addEventListener("click", function() {
//   homeView.classList.add("hidden");
//   addView.classList.add("hidden");

//   homeView.classList.add("visible");
//   homeView.classList.remove("hidden");




























