
// とりあえず、画像を表示
// 
var showRanking = function(){

	var query = new Parse.Query("Post");
	var user = Parse.User.current().get("username");

	query.equalTo("User", user);
	query.ascending("updatedAt");
	query.find({
		success:function(results){
			makeHtml(results);
		}
	});	
}

var makeHtml = function(results){
	// $("#display").append("hoge");
	for(var i=0; i < results.length; i++){
		var entry = results[i];

		var title = entry.get("Position");
		var image = entry.get("URL");
		var comment = entry.get("TotalPoint");
		var user = entry.get("User");

		var item = '<tr><th><img src="' + image + '"></th><th>' + user + '</th><th>' + title + '</th><th>' + comment + '</th></tr>';
		$("#id tbody").append(item);

		// var item = 

	}
}

$(document).ready(function(){
	showRanking();
})