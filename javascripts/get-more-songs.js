define(["jquery"], function($){
  return {
    getMeSomeData: function(songsExecute){
      $.ajax({url: "data/ver5MoreSongs.json"}).done(songsExecute);
  	} 
  };
});
	
	