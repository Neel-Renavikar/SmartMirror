var self = this;
var comp = function comp(a, b) {
        return new Date(a.start.dateTime || a.start.date).getTime() - new Date(b.start.dateTime || b.start.date).getTime();
};
var now = new Date();
var settings = {
	calendarUrl: 'https://www.googleapis.com/calendar/v3/calendars/neel.renavikar@gmail.com/events?key=AIzaSyAQhE9P1nL_gow8KqmwFRONVbSb56HabFw',
	past: false,
	upcoming: true,
	sameDayTimes: true,
	dayNames: true,
	pastTopN: -1,
	upcomingTopN: -1,
	recurringEvents: true,
        itemsTagName: 'li',
        upcomingSelector: '#events-upcoming',
        pastSelector: '#events-past',
        upcomingHeading: '<h2>Upcoming events</h2>',
        pastHeading: '<h2>Past events</h2>',
        format: ['*date*', ': ', '*summary*', ' &mdash; ', '*description*', ' in ', '*location*'],
        timeMin: now.getTime(),
	timeMax: undefined
};
	var data;		
	finalURL = settings.calendarUrl.concat('&singleEvents=true&orderBy=starttime');
	var request = new XMLHttpRequest();
	request.open('GET', finalURL, true);
	request.onload = function(){
		if(request.status >= 200 && request.status < 400){
			data = JSON.parse(request.responseText);
			result = data.items.filter(function (item) {
		            return item && item.hasOwnProperty('status') && item.status !== 'cancelled';
			}).sort(comp)
			for (i in result){
				date = new Date(result[i].start.dateTime);
				now = new Date();
				if(now.getTime() < date.getTime()){
				document.getElementById('calendar').innerHTML += result[i].summary + " " + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + " : " + date.getHours();
				if(date.getMinutes() < 10){
					document.getElementById('calendar').innerHTML += ":0" + date.getMinutes() + "<br/>";
				}
				else{
					document.getElementById('calendar').innerHTML += ":0" + date.getMinutes() + "<br/>";
				}
				}
			}
			console.log(result[0]);			
			console.log(data);
		}
		else{
			console.error(err);
		}
	};
	request.send();
