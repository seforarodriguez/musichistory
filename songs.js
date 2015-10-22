$(document).ready(function() {

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
// var addingSong = $(".AddBox");
var addButton = $(".AddButton");
// var blueBox = $(".blue-box"); 
// // var yellowBox = $(".yellow-box");
// var returnB = $(".returnList");
// var addToListB = $(".Add");
// var addSongName = $(".songName");

// Button to hide and show the add music box
$("#addMusicLink").click(function(event){
	event.preventDefault();
	console.log("happy")
	$("#AddBox").show();
	$(".blue-box").hide();
	$(".yellow-box").hide();
	// addingSong.classList.add("visible");
	// blueBox.classList.add("hidden");
	// yellowBox.classList.add("hidden");
});

$("#returnList").click(function(event) {
	event.preventDefault();
	$("#AddBox").hide();
	$(".blueBox").show();
	$("yellowBox").show();
 });

$(".add").click(function(event){
	var formatforSongs = $(".songName") + "-" + $(".enterArtist") + "-" + $(".enterAlbum") + "-" + $(".enterGenre")
	var formatAddSongName = "<h4>" + formatforSongs + "</h4>";
	songElement.innerHTML += formatAddSongName;
});

// addToListB.addEventListener("click", function() {
// 	var formatAddSongName = "<h4>" + addSongName.value + "</h4>";
// 	songElement.innerHTML =+ formatAddSongName;
// });

// var homeLink = document.getElementById("link-home");
// var homeView = document.getElementById("home-view");

// homeLink.addEventListener("click", function() {
//   homeView.classList.add("hidden");
//   addView.classList.add("hidden");

//   homeView.classList.add("visible");
//   homeView.classList.remove("hidden");


});


























