var movies = [
	{
		title: "Hunger Games",
		rating: 4.5,
		hasWatched: false
	},
	{
		title: "Ice Age",
		rating: 3,
		hasWatched: true
	},
	{
		title: "Mad Max",
		rating: 7.5,
		hasWatched: false
	}
]

function buildString(movie){
	var result = "You have ";
	if(movie.hasWatched){
		result += "seen ";
	} else{
		result +=  "not seen ";
	}
	result += "\"" + movie.title + "\" - ";
	result += movie.rating + " stars.";
	return result;
}

for(var i = 0; i < movies.length; i++){
	console.log(buildString(movies[i]));
}