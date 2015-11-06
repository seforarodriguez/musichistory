define(["jquery", "populate-songs", "get-more-songs", "execute-songs", "hbs"], 
	function($, populateSongs,getMoreSongs, songsFunction, handlebar) {
	
	populateSongs.getMeSomeData(function(songsObject){
		require(['hbs!../templates/songs'], function(songtemplate) {
		$("#song-list").append(songtemplate(songsObject));
	});
});

	$("body").on('click', '#getMoreSongs',function() {
		getMoreSongs.getMeSomeData(function(songs){
			require(['hbs!../templates/songs'], function(songtemplate) {
			$("#song-list").append(songtemplate(songs));		
		});
	});
});


// populateSongs.getMeSomeData(function(getSomeData) {
//     console.log("getSomeData", getSomeData);
//   });

// Link to hide and show the add music box
	$("#addMusicLink").click(function(event){
		event.preventDefault();
		console.log("happy");
			$("#AddBox").show();
			$("#blue-box").hide();
			$("#yellow-box").hide();
	});

//This link brings me back to the main view
	$("#returnList").click(function(event) {
		event.preventDefault();
		console.log("Doing Something");
			$("#AddBox").hide();
			$("#blue-box").show();
			$("#yellow-box").show();
	 });


//This deletes ONLY the song box because of the parentNode
	$("body").click(function(event) {
  		console.log(event);

	  	if (event.target.className === "btn btn-default deleteLine") {
	    	event.target.parentNode.remove();

	    	console.log("anything");
		}
  	});

	
	//This deletes everything from the box
	$(".deleteAll").click(function(event) {
		event.preventDefault();
		$("#song-list").html("<div>" + " " + "</div>");
	});
		


// This allows me to add a new song to my array or whatever ITS WORKING!!!!!
	$(".add").click(function(event){

		var codeForTitle = "<h1>" + $(".enterName").val() + "</h1>";
        var codeForArtist = "<p>Performed by " + $(".enterArtist").val() + "</p>";
        var codeForAlbum = "<p>Album " + $(".enterAlbum").val() + "</p>" + "<button class='btn btn-default deleteLine'>Delete</button>";
        var codeForAllParts = "<div>" + codeForTitle + codeForArtist + codeForAlbum + "</div>";
        
		$("#song-list").append(codeForAllParts);
	    console.log("#song-list", codeForAllParts);
	});






//this is closing the top things opening {()}

});














