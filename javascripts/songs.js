$(document).ready(function() {

// Link to hide and show the add music box
	$("#addMusicLink").click(function(event){
		event.preventDefault();
		console.log("happy")
			$("#AddBox").show();
			$("#blue-box").hide();
			$("#yellow-box").hide();
	})

//This link brings me back to the main view
	$("#returnList").click(function(event) {
		event.preventDefault();
		console.log("Doing Something");
			$("#AddBox").hide();
			$("#blue-box").show();
			$("#yellow-box").show();
	 });



	function executeSongs(songList) {
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

	//to link it with the object list
	$.ajax({url: "ver5songs.json"}).done(executeSongs);


//This deletes ONLY the song box because of the parentNode
	$("body").click(function(event) {
  		console.log(event);

	  	if (event.target.className === "deleteLine") {
	    	event.target.parentNode.remove();

	    	console.log("anything")
		};
  	});


	//This deletes everything from the box
	$(".deleteAll").click(function(event) {
		event.preventDefault();
		$("#song-list").html("<div>" + " " + "</div>");
	});

		//Adding the extra Songs button.

	
	$("body").on('click', '#getMoreSongs',function() {
		
		 $.ajax({url: "ver5MoreSongs.json"}).done(executeSongs);
	})


// This allows me to add a new song to my array or whatever**************** NOT WORKING
	$(".add").click(function(event){

		var codeForTitle = "<h1>" + currentSong.title + "</h1>";
	        var codeForArtist = "<p>Performed by " + currentSong.artist + "</p>";
	        var codeForAlbum = "<p>Album " + currentSong.album + "</p>" + "<button class='deleteLine'>Delete</button>";
	        var codeForAllParts = "<div>" + codeForTitle + codeForArtist + codeForAlbum + "</div>";
	        
	});


var formatforSongs = $(".enterName") + "-" + $(".enterArtist") + "-" + $(".enterAlbum") + "-" + $(".enterGenre");
			var formatAddSongName = "<h4>" + formatforSongs + "</h4>";
			songElement.innerHTML += formatAddSongName;











//this is closing the top things opening {()}
});











































