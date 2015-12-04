
app.controller("SongsAddForm", 
	["$q", "$http","$scope", "simple-songs" ,
	function($q, $http, $scope, simpleSongs) {	
	// $scope.model("AlbumDropDown"); // do I need to do this? why did this break my code?
	// $scope.model("ArtistDropDown"); // do I need to do this?
	
	simpleSongs.loadSongs().then(
        function () {
          $scope.songs = simpleSongs.getSongs();
        },
        function (error) {
          console.log(error);
        }
      );


	}]); //ending of the top app.controller(SongAddForm)