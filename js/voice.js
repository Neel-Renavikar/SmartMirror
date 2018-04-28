function startDictation() {

    if (window.hasOwnProperty('webkitSpeechRecognition')) {

      var recognition = new webkitSpeechRecognition();

      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.lang = "en-US";
      recognition.start();

      recognition.onresult = function(e) {
	var interim_text = e.results[e.results.length - 1][0].transcript;
	var temp_text;
		if(interim_text.split(/\s+|\./).includes('weather')){
        		if(interim_text.split(/\s+|\./).includes('today') || interim_text.split(/\s+|\./).includes("today's")){
				$.getScript('/responsiveVoice.js', function(){				
				responsiveVoice.speak("showing today's weather");
				});				
				document.getElementById('tomorrow_weather_onrequest').style.display = "none";
				document.getElementById('calendar').style.display = "none";
				document.getElementById('today_weather_onrequest').style.display = "block";
			}
			else if(interim_text.split(/\s+|\./).includes('tomorrow') || interim_text.split(/\s+|\./).includes("tomorrow's")){
				document.getElementById('today_weather_onrequest').style.display = "none";				
				document.getElementById('calendar').style.display = "none";			
				document.getElementById('tomorrow_weather_onrequest').style.display = "block";
			}
		}
        	else if(interim_text.split(/\s+|\./).includes('calendar') || interim_text.split(/\s+|\./).includes('appointments')){
			document.getElementById('today_weather_onrequest').style.display = "none";
			document.getElementById('tomorrow_weather_onrequest').style.display = "none";		
			document.getElementById('calendar').style.display = "block";		
		}
		//else if(interim_text.split(/\s+|\./).includes('video')){
		//	document.getElementById('today_weather_onrequest').style.display = "none";
		//	document.getElementById('tomorrow_weather_onrequest').style.display = "none";
		//	document.getElementById('calendar').style.display = "none";
			//youtube_search();
		//	document.getElementById('youtube').style.display = "block";
			//mode = 2;
			//temp_text = interim_text;				
		//}
		else if(interim_text.split(/\s+|\./).includes('home')){
			document.getElementById('today_weather_onrequest').style.display = "none";
			document.getElementById('tomorrow_weather_onrequest').style.display = "none";
			document.getElementById('calendar').style.display = "none";				
		}
		else{
			document.getElementById('transcript').value = interim_text;
		}
      };

      recognition.onerror = function(e) {
        recognition.stop();
      }

    }
  }

var imported1 = document.createElement("script");
imported.src = "https://code.responsivevoice.org/responsivevoice.js";
document.getElementsByTagName("head")[0].appendChild(imported);
startDictation()
