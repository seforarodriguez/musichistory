define(["jquery"], function($) {

	return {
		executeSongs: function(songList) {
			    console.log(songList.songs);

			   for (var i = 0; i < songList.songs.length; i++) {
			        var currentSong = songList.songs[i];
			        
			        //I needed to add them all into variables and then assing it to song-list 
			        //because jquery is trying to be too helpful and added the div after the first line and adds a closing div
			       
			        var codeForTitle = "<h1>" + currentSong.title + "</h1>";
			        var codeForArtist = "<p>Performed by " + currentSong.artist + "</p>";
			        var codeForAlbum = "<p>Album " + currentSong.album + "</p>" + "<button class='deleteLine'>Delete</button>";
			        var codeForAllParts = "<div>" + codeForTitle + codeForArtist + codeForAlbum + "</div>";
			        
			        $("#song-list").append(codeForAllParts);
			        console.log("#song-list", codeForAllParts);
			       
			    }
			}
	};
});