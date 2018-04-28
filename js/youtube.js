//function youtube_search() {
		//e.preventDefault();
//		console.log("here");
//		var search_str = document.getElementById('transcript').value;
//		document.getElementById('transcript').value = "in here";
//		var request = gapi.client.youtube.search.list({
//			part: "snippet",
//			type: "video",
//			q: encodeURIComponent(search_str.replace(/%20/g, "+")),
//			maxResults : 3,
//			order: "viewCount"
//		});
//		request.execute(function(response){
//			var results = response.result;
//			$.each(results.items, function(index, item){
//				$("#results").append("<h2>" + item.snippet.title + "</h2><br>" + "<iframe width='640' height='360' src = '//www.youtube.com/embed/" +  item.id.videoId + "' frameborder='0' allowfullscreen><iframe><br>");
//			 });
//		});
//	}

//function init(){
//	gapi.client.setApiKey("AIzaSyAQhE9P1nL_gow8KqmwFRONVbSb56HabFw");
//	gapi.client.load("youtube","v3", function(){
//		//ready
//		console.log("youtube api loaded here..")
//	});
//	gapi.auth2.init({
//		client_id:"281938356870-erc5gt6rt7pogbjl6pfef3n58kf953nl.apps.googleusercontent.com"
//	});
//	
//;}

function youtube_search(search_str){
	//var search_str = document.getElementById('transcript').value;
	$.getJSON("https://www.googleapis.com/youtube/v3/search?part=snippet&fields=items(id,snippet(title , channelTitle, thumbnails ))&order=viewCount&q="  + search_str.replace(/%20/g, "+") + "&type=video&maxResults=1&key=AIzaSyAQhE9P1nL_gow8KqmwFRONVbSb56HabFw",function(json){
		
			console.log(search_str);
		document.getElementById('youtube_results').innerHTML = "<h2>" + json.items[0].snippet.title + "</h2><br>" + "<iframe id='yframe' width='450' height='250' src = '//www.youtube.com/embed/" +  json.items[0].id.videoId + "?autoplay=1' frameborder='0' allowfullscreen><iframe><br>";
		
		console.log(JSON.stringify(json));
		//$("#results").append();
	});
}

function youtube_stop(){
	var frame = document.getElementById('yframe');
	frame.src = frame.src.split('?')[0];
	//frame.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');	
}
