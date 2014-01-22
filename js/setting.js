
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

	var position = $("#Position").val();
	var totalpoint = $("#TotalPoint").val();
	var user = Parse.User.current().get("username");

	myPost.set("Position",position);
	myPost.set("URL",upload_url);
	myPost.set("TotalPoint",totalpoint);
	myPost.set("User",user);

	myPost.save(null,{
		success: function(){
			// showPic();
			alert("photo upload is success");
		}
	});
}

$(document).ready(function(){
	$("#user-name").html("username : " + Parse.User.current().get("username"));
})