var self = this;
		
		setInterval(function(){
			document.getElementById("date").innerHTML = moment().tz("Asia/Calcutta").format("dddd LL");	
		},1000);
