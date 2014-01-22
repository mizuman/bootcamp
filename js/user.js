var APP_ID = "8t6z62bZoj8sPiSsDgWU1yPpdeq3Oe2ffkMYhsGB";
var JS_KEY = "h8x0AfNvjDAKRQSvVKygIiVdp4DDKQkkqm4bnGK1";

var test_login;

$(document).ready(function(){
	Parse.initialize(APP_ID, JS_KEY);

	var userSignup = function(){
		var signup_user = new Parse.User();

		signup_user.set("username", $("#username").val());
		signup_user.set("password", $("#password").val());

		signup_user.signUp(null, {
			success: function(result_user){
				// changeView('service');
				document.location = "./main.html";
			},
			error: function(result_user, error){
				alert("error" + error.message);
			}
		});
	}

	var userLogin = function(){
		var username = $("#username").val();
		var password = $("#password").val();

		Parse.User.logIn(username,password,{
			success: function(result_user) {
				// changeView('service');
				console.log(result_user);
				// showPic();
				document.location = "./main.html";
			},
			error: function(result_user, error) {
				alert("error" + error.message);
			}
		});
	}

	test_login = function(){
		var username = "test";
		var password = "test";

		Parse.User.logIn(username,password,{
			success: function(result_user) {
				// changeView('service');
				console.log(result_user);
				// showPic();
				document.location = "./main.html";
			},
			error: function(result_user, error) {
				alert("error" + error.message);
			}
		});		
	}

	var userLogout = function(){
		Parse.User.logOut();
		document.location = "./index.html";
	}

	$("#signup").on("click", function(){
		userSignup();
	})

	$("#login").on("click", function(){
		userLogin();
	})

	$("#logout").on("click", function(){
		userLogout();
	})	
})
