$(function() {
	$("form").on("submit", function(e) {
		var event = {
  			'summary': $("#summary").val(),
  			'location': $("#location").val(),
  			'start': {
    			'dateTime': $("#Start Date Time").val(),
    			'timeZone': 'Asia/Calcutta'
  			},
  			'end': {
    			'dateTime': $("#End Date Time").val(),
   			'timeZone': 'Asia/Calcutta'
  			},
  			'recurrence': [
    				'RRULE:FREQ=DAILY;COUNT=2'
  			],
  			'reminders': {
    				'useDefault': false,
    				'overrides': [
      					{'method': 'email', 'minutes': 24 * 60},
      					{'method': 'popup', 'minutes': 30}
    				]
  			}
		};

		var request = gapi.client.calendar.events.insert({
  			'calendarId': 'primary',
  			'resource': event
		});

		request.execute(function(event) {
  			console.log(event);
		});		
	});
});

function init(){
	gapi.client.setApiKey("AIzaSyAQhE9P1nL_gow8KqmwFRONVbSb56HabFw");
	gapi.client.load("calendar","v3", function(){
		console.log("calendar api loaded here..");
	});
	gapi.client.load("youtube","v3", function(){
		//ready
		console.log("youtube api loaded here..")
	});
	gapi.auth2.init({
		client_id:"281938356870-6vcasfqiplgj7ah2lfi3r74m2vgc87na.apps.googleusercontent.com",
		scope:"https://www.googleapis.com/auth/calendar"
	});
	
;}

