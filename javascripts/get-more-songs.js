define(["jquery", "execute-songs"], function($, songsFunction) {
  
	
	$("body").on('click', '#getMoreSongs',function() {
	
		$.ajax({url: "data/ver5MoreSongs.json"}).done(songsFunction.executeSongs);
	});
	

});