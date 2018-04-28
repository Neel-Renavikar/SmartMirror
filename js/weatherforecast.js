var self = this;
moment.locale("en");



			$.getJSON("http://api.openweathermap.org/data/2.5/forecast?id=1253367&APPID=ce2fa2a16af8d4c0226329790cd0ee2c",function(json){            
		
		days = ['Sunday' , 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		var dateo1 = new Date(json.list[0].dt*1000);
		var dateo2 = new Date(json.list[1].dt*1000);
		var dateo3 = new Date(json.list[2].dt*1000);
		var dateo4 = new Date(json.list[3].dt*1000);
		var dateo5 = new Date(json.list[4].dt*1000);

		var date0 = new Date(json.list[7].dt*1000);
		var date1 = new Date(json.list[15].dt*1000);
		var date2 = new Date(json.list[23].dt*1000);
		var date3 = new Date(json.list[31].dt*1000);

			var today = new Date(json.list[0].dt*1000);
			document.getElementById("today_weather_onrequest").innerHTML += today.getDate() + "/" + (today.getMonth() + 1) + "/" + (today.getYear()-100) + "  :  " + today.getHours() + ":00  :::  ";
			document.getElementById("today_weather_onrequest").innerHTML += parseFloat(json.list[0].main.temp-273).toFixed(2) + " Celcius " + json.list[0].weather[0].description;
			document.getElementById("today_weather_onrequest").innerHTML += "<br />";
			var next_forecast = new Date(json.list[1].dt*1000);
			var i = 1;
			while(next_forecast.getDay() == today.getDay()){
				document.getElementById("today_weather_onrequest").innerHTML += next_forecast.getDate() + "/" + (next_forecast.getMonth() + 1) + "/" + (next_forecast.getYear()-100) + "  :  " + next_forecast.getHours() + ":00  :::  ";
				document.getElementById("today_weather_onrequest").innerHTML += parseFloat(json.list[i].main.temp-273).toFixed(2) + " Celcius " + json.list[i].weather[0].description;
				document.getElementById("today_weather_onrequest").innerHTML += "<br />";
				i = i + 1;
				next_forecast = new Date(json.list[i].dt*1000)
			}
			var next_forecast = new Date(json.list[1].dt*1000);
			var i = 1;
			while(next_forecast.getDay() == today.getDay()){
				i = i+1;
				next_forecast = new Date(json.list[i].dt*1000)
			}
			while(next_forecast.getDay() == (today.getDay() + 1) ){
				document.getElementById("tomorrow_weather_onrequest").innerHTML += next_forecast.getDate() + "/" + (next_forecast.getMonth() + 1) + "/" + (next_forecast.getYear()-100) + "  :  " + next_forecast.getHours() + ":00  :::  ";
				document.getElementById("tomorrow_weather_onrequest").innerHTML += parseFloat(json.list[i].main.temp-273).toFixed(2) + " Celsius " + json.list[i].weather[0].description;
				document.getElementById("tomorrow_weather_onrequest").innerHTML += "<br />";
				i = i + 1;
				next_forecast = new Date(json.list[i].dt*1000)
			}

		document.getElementById("forecast").innerHTML += date0.toDateString() + "  ::  ";
		document.getElementById("forecast").innerHTML += parseFloat(json.list[7].main.temp-273).toFixed(2) + " Celsius" + " " + json.list[7].weather[0].description;
		document.getElementById("forecast").innerHTML += "<br />";

		document.getElementById("forecast").innerHTML += date1.toDateString() + "  ::  ";
		document.getElementById("forecast").innerHTML += parseFloat(json.list[15].main.temp-273).toFixed(2) + " Celsius" + " " + json.list[15].weather[0].description;
		document.getElementById("forecast").innerHTML += "<br />";

		document.getElementById("forecast").innerHTML += date2.toDateString() + "  ::  ";
		document.getElementById("forecast").innerHTML += parseFloat(json.list[23].main.temp-273).toFixed(2) + " Celsius" + " " + json.list[23].weather[0].description;
		document.getElementById("forecast").innerHTML += "<br />";

		document.getElementById("forecast").innerHTML += date3.toDateString() + "  ::  ";
		document.getElementById("forecast").innerHTML += parseFloat(json.list[31].main.temp-273).toFixed(2) + " Celsius" + " " + json.list[31].weather[0].description;
		document.getElementById("forecast").innerHTML += "<br />";

});

function getcityweather(city_name){
	$.getJSON("http://api.openweathermap.org/data/2.5/forecast?q="+ city_name + "&APPID=ce2fa2a16af8d4c0226329790cd0ee2c",function(json){
		console.log(json);
		
		var dateo1 = new Date(json.list[0].dt*1000);
		var dateo2 = new Date(json.list[1].dt*1000);
		var dateo3 = new Date(json.list[2].dt*1000);
		var dateo4 = new Date(json.list[3].dt*1000);
		var dateo5 = new Date(json.list[4].dt*1000);

					var today = new Date(json.list[0].dt*1000);
			document.getElementById("citytoday_weather_onrequest").innerHTML = "<h2> " + city_name + " today's weather forecast</h2>";
						document.getElementById("citytomorrow_weather_onrequest").innerHTML = "<h2> " + city_name + " tomorrow's weather forecast</h2>";
			document.getElementById("citytoday_weather_onrequest").innerHTML += today.getDate() + "/" + (today.getMonth() + 1) + "/" + (today.getYear()-100) + "  :  " + today.getHours() + ":00  :::  ";
			document.getElementById("citytoday_weather_onrequest").innerHTML += parseFloat(json.list[0].main.temp-273).toFixed(2) + " Celcius " + json.list[0].weather[0].description;
			document.getElementById("citytoday_weather_onrequest").innerHTML += "<br />";
			var next_forecast = new Date(json.list[1].dt*1000);
			var i = 1;
			while(next_forecast.getDay() == today.getDay()){
				document.getElementById("citytoday_weather_onrequest").innerHTML += next_forecast.getDate() + "/" + (next_forecast.getMonth() + 1) + "/" + (next_forecast.getYear()-100) + "  :  " + next_forecast.getHours() + ":00  :::  ";
				document.getElementById("citytoday_weather_onrequest").innerHTML += parseFloat(json.list[i].main.temp-273).toFixed(2) + " Celcius " + json.list[i].weather[0].description;
				document.getElementById("citytoday_weather_onrequest").innerHTML += "<br />";
				i = i + 1;
				next_forecast = new Date(json.list[i].dt*1000)
			}
			var next_forecast = new Date(json.list[1].dt*1000);
			var i = 1;
			while(next_forecast.getDay() == today.getDay()){
				i = i+1;
				next_forecast = new Date(json.list[i].dt*1000)
			}
			while(next_forecast.getDay() == (today.getDay() + 1) ){
				document.getElementById("citytomorrow_weather_onrequest").innerHTML += next_forecast.getDate() + "/" + (next_forecast.getMonth() + 1) + "/" + (next_forecast.getYear()-100) + "  :  " + next_forecast.getHours() + ":00  :::  ";
				document.getElementById("citytomorrow_weather_onrequest").innerHTML += parseFloat(json.list[i].main.temp-273).toFixed(2) + " Celsius " + json.list[i].weather[0].description;
				document.getElementById("citytomorrow_weather_onrequest").innerHTML += "<br />";
				i = i + 1;
				next_forecast = new Date(json.list[i].dt*1000)
			}

		
	});
}
