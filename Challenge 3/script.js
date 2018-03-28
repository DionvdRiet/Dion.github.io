


function getAPIdata() {

	// get latest weather
	fetch('http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=Grnx9AqDEFsSLBtA44kDeeqByx2VOBwu')
	
	// parse to JSON format 
	.then(function(response) {
		return response.json();
	})
	
	// render weather per day
	.then(function(response) {

		// render weatherCondition
		console.log(response.object.array.data[0].images.preview.mp4);
		document.getElementById('image').src = response.object.array.data[0].images.preview.mp4
	})
	
	// catch error
	.catch(function (error) {
		// onAPIError();
		console.error('Request failed', error);
	});
}

getAPIdata();


//Om te testen dat het goed gelinkt is:
//document.body.style.backgroundColor = 'red';