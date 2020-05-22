/** @format */

$("#findCity").on("click", function (event) {
	event.preventDefault();

	var city = $("#city").val();

	// URL for Current Day weather stats
	var queryURL =
		"https://api.openweathermap.org/data/2.5/weather?q=" +
		city +
		"&appid=09a260fc0efe0dcbc4430e9f442c0f34&units=imperial";

	$.ajax({
		url: queryURL,
		method: "GET",
	}).then(function (response) {
		console.log(queryURL);
		console.log(response);

		var today = new Date();
		Math.ceil((today - new Date(today.getYear(), 0, 1)) / 86400000);

		$("#cityDate").html("<h2>" + response.name + " " + today + "</h2>");
		$("#temp").text("Temperature: " + response.main.temp + "°F");
		$("#humidity").text("Humidity: " + response.main.humidity + "%");
		$("#wind").text("Wind Speed: " + response.wind.speed + " MPH");

		console.log("Temperature: " + response.main.temp);
		console.log("Humidity: " + response.main.humidity);
		console.log("Wind Speed: " + response.wind.speed);
	});

	// URL for UV Index
	/* var queryURL2 =
		"http://api.openweathermap.org/data/2.5/uvi?appid=" +
		"09a260fc0efe0dcbc4430e9f442c0f34&lat=" +
		response.coord.lat +
		"&lon=" +
		response.coord.lon;

	$.ajax({
		url: queryURL2,
		method: "GET",
	}).then(function (response) {
		console.log(queryURL2);
		console.log(response);

		$("#uv").text("UV Index: " + response.value);

		console.log("UV Index: " + response.value);
	}); */

	// URL for 5-Day forecast
	/* var queryURL3 =
		"https://api.openweathermap.org/data/2.5/forecast?q=" +
		city +
		"&appid=09a260fc0efe0dcbc4430e9f442c0f34&units=imperial";

	$.ajax({
		url: queryURL3,
		method: "GET",
	}).then(function (response) {
		console.log(queryURL3);
		console.log(response);

		$("#date2").html("<h5>" + (response.list[i].dt * 1000) + "</h5>");
		$("#temp2").text("Temp: " + response.list[i].main.temp + "°F");
		$("#humid2").text("Humidity: " + response.list[i].main.humidity + "%");
	}); */
});

/// help with current date catonization: https://www.epochconverter.com/daynumbers//
