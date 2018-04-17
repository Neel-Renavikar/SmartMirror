var self = this;
moment.locale("en");

			$.getJSON("http://api.openweathermap.org/data/2.5/forecast?id=1253367&APPID=ce2fa2a16af8d4c0226329790cd0ee2c",function(json){            
		
		//document.getElementById("forecast").innerHTML = JSON.stringify(json);
		days = ['Sunday' , 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];		
		var date0 = new Date(json.list[7].dt*1000);
		var date1 = new Date(json.list[15].dt*1000);
		var date2 = new Date(json.list[23].dt*1000);
		var date3 = new Date(json.list[31].dt*1000);

		document.getElementById("forecast").innerHTML += date0 + "  ::  " + days[date0.getDay()] + " ";
		document.getElementById("forecast").innerHTML += json.list[7].main.temp + " " + json.list[7].main.pressure + " " + json.list[7].weather[0].main + " " + json.list[7].weather[0].description;
		document.getElementById("forecast").innerHTML += "<br />";

		document.getElementById("forecast").innerHTML += date1 + "  ::  " + days[date1.getDay()];
		document.getElementById("forecast").innerHTML += json.list[15].main.temp + " " + json.list[15].main.pressure + " " + json.list[15].weather[0].main + " " + json.list[15].weather[0].description;
		document.getElementById("forecast").innerHTML += "<br />";

		document.getElementById("forecast").innerHTML += date2 + "  ::  " + days[date2.getDay()];
		document.getElementById("forecast").innerHTML += json.list[23].main.temp + " " + json.list[23].main.pressure + " " + json.list[23].weather[0].main + " " + json.list[23].weather[0].description;
		document.getElementById("forecast").innerHTML += "<br />";

		document.getElementById("forecast").innerHTML += date3 + "  ::  " + days[date3.getDay()];
		document.getElementById("forecast").innerHTML += json.list[31].main.temp + " " + json.list[31].main.pressure + " " + json.list[31].weather[0].main + " " + json.list[31].weather[0].description;
		document.getElementById("forecast").innerHTML += "<br />";

	//	var date = new Date(json.list[1].dt*1000);
	// Hours part from the timestamp
	//	var hours = date.getHours();
	// Minutes part from the timestamp
	//	var minutes = "0" + date.getMinutes();
	// Seconds part from the timestamp
	//	var seconds = "0" + date.getSeconds();

	// Will display time in 10:30:23 format
	//	var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
	//	document.getElementById("forecast").innerHTML += date;
	//	document.getElementById("forecast").innerHTML += "<br />";
	//	document.getElementById("forecast").innerHTML += formattedTime;
});
