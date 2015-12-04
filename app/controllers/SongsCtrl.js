
app.controller("SongsCtrl", 
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


	$scope.killeachSong = function (song) {
		// Do you see the PFM here of full object comparison
		//this is grabbing the songs object from the global scope and 
		// taking the song element passed through the parameter
			var songsIndex = $scope.songs.indexOf(song); 

			if (songsIndex >= 0) {
				$scope.songs.splice(songsIndex, 1);
			}
    };

    $scope.showMoreSongs = function (moreSongs) {
    	console.log("login")
    	getMoreSongs(moreSongs)
    	.then(function(moreSongs){
    		$scope.songs.push($scope.Songs);
    	})
    };



	}]); //End of top controller