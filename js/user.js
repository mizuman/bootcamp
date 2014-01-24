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
				//mysql
				//var post_data = $F('text');
				$.ajax({
        			type: "POST",
        			url: "../php/insert.php",
        			data: 'data1=$("#username").val()&data2=$("#password").val()',
        			success: function() {
                		alert('success');
        			}
				}
				/*new Ajax.Request("../php/insert.php",{
					method: 'regist',
					parameters: 'username=' + post_username,
					onComplete: window.alert("Your request was acccepted")
				});*/
				
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

//comment:uidがdb上でユニークであること
	var searchUser= function(uid){
	     var query = new Parse.Query(Parse.User);
	     query.equalTo("username", uid);
	     query.find({
	       success: function(searched_user) {
	       	var item = '<li class="list-group-item">' + searched_user[0].get("username") + '</li>';
		 $("div#search_results").append(item);
		 $("#search_user").val('');
	       }
	     });
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

	$("#search_user" ).keypress(function(e) {
	  if(e.which == 13){ // if enter is pressed
	    var uid = $("#search_user").val();
	    searchUser(uid);
	  }
	});

})
