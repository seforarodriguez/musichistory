
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

	var code = "<h1>" + newsongs + "</h1>";

 songElement.innerHTML= songElement.innerHTML + code;

}

