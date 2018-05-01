var self = this;
		
		setInterval(function(){
			document.getElementById("time").innerHTML = moment().tz("Asia/Calcutta").format("HH:mm:ss");	
		},1000);
