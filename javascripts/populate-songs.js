define(["jquery"], function($){
  return {
    getMeSomeData: function(callbackFunctionReference){
      $.ajax({url:"data/ver5songs.json"}).done(callbackFunctionReference);
  	}
   
  };
});
	






