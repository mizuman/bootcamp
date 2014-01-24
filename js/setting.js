
var upload_file = function(){
	var fileUpload = $("#FileUpload")[0];
	if (fileUpload.files.length > 0) {
		var file = fileUpload.files[0];
		var name = file.name;

		var parseFile = new Parse.File(name, file);

		parseFile.save().then(function(upload_info){
			// alert("save at " + upload_info.url());
			create_post(upload_info.url());
		});
	}
	else alert("File isn't selected!");
}

var create_post = function(upload_url){
	var Post = Parse.Object.extend("Post");
	var myPost = new Post();

	var biography = $("#Biography").val();
	var user = Parse.User.current().get("username");

	myPost.set("Biography",biography);
	myPost.set("URL",upload_url);
	myPost.set("User",user);

	myPost.save(null,{
		success: function(){
			// showPic();
			getUserInfo();
			alert("photo upload is success");
		}
	});
}

var getUserInfo = function(){
	var query = new Parse.Query("Post");
	var user = Parse.User.current().get("username");

	query.equalTo("User", user);
	query.ascending("updatedAt");
	query.find({
		success:function(results){
			// console.log(results);
			if(results!=0) showUserInfo(results);
		}
	});
}

var showUserInfo = function(results){

	var entry = results[results.length-1];
	var biography = entry.get("Biography");
	var image = entry.get("URL");
	var user = entry.get("User");

	var item = '<a class="pull-left" href="#"><img class="media-object" data-src="holder.js/64x64" alt="64x64" style="width: 64px; height: 64px;" src="' + image + '"></a><div class="media-body"><h4 class="media-heading">' + user + '</h4>' + biography + '</div>';

	$(".media").html(item);	
	
}

// $(document).ready(function(){
// 	$("#user-name").html("username : " + Parse.User.current().get("username"));
// })

$("#submit").on("click", function(){
	upload_file();
})

$(document).ready(function(){
	$("h4.media-heading").text(Parse.User.current().get("username"));
	getUserInfo();
})