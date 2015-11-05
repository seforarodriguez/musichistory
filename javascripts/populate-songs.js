define(["jquery", "execute-songs"], function($, songsFunction) {
  

	//to link it with the object list
	$.ajax({url: "data/ver5songs.json"}).done(songsFunction.executeSongs);



});






