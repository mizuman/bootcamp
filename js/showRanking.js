
<<<<<<< Updated upstream

=======
// とりあえず、画像を表示
// 

/*
>>>>>>> Stashed changes
var showRanking = function(){

	//var user = Parse.User.current().get("username");

	var mysql = require('mysql');
	
	var connection = mysql.createConnection({
		host     : '153.149.5.92', //接続先ホスト
		user     : 'thanks',      //ユーザー名
		password : 'thanksthanks',  //パスワード
		database : 'user'    //DB名
	});


	//SQL文を書く
	//var sql = 'SELECT * FROM user WHERE UserNO = ?;';
	//var sql = 'SELECT * FROM user ORDER BY sum_p LIMIT 0, 5;'
	var sql = 'SELECT * FROM user ORDER BY sum_p DESC;'



	//プレースホルダに差し込むデータ
	//var userId = '012345678';


	//接続します
	connection.connect();


	//プレースホルダー使ってSQL発行
	//var query = connection.query(sql, [userId]);
	var query = connection.query(sql);


<<<<<<< Updated upstream
	query.find({
		success:function(results){
			//makeHtml(results);
			makeData(results);
		}
	});	
=======
	//query.find({
	//	success:function(results){
	//		//makeHtml(results);
	//		makeData(results);
	//	}
	//});

	//エラー用
	query.on('error', function(err) {
    	console.log('err is: ', err );
	})

	//結果用
	query.on('result', function(rows) {
    	console.log('The res is: ', rows );
    	makeData(rows);
	})

	//終了用
	query.on('end', function() {
    	console.log('end');
    connection.destroy();
	});
		
>>>>>>> Stashed changes
}
*/



var makeData = function(){
//function makeData(){
<<<<<<< Updated upstream
=======
	//var username = Parse.User.current().get("username");
	var username = "Keiko";
>>>>>>> Stashed changes

	var username = "akiko";

<<<<<<< Updated upstream
	var ary0 = ['92', 'Ayako', 'Akita', '100'];
	var ary1 = ['78', 'Sayako', 'Iwate', '75'];
	var ary2 = ['68', 'Tomoko', 'Tokyo', '50'];
	var ary3 = ['92', 'Machiko', 'Kyoto', '25'];
	var ary4 = ['78', 'Mutsuko', 'Saga', '0'];

/*
	for(var i=0; i < results.length; i++){
		if(results[i].get("name") = username){
			ary0 = results[i-2];
			ary1 = results[i-1];
			ary2 = results[i];
			ary3 = results[i+2];
			ary4 = results[i+3];
		}
	}
*/
	var ary = [ary0, ary1, ary2, ary3, ary4];
=======
	var ary_temp = [ary0, ary1, ary2, ary3, ary4];

	var ary = [];

/*
	if(results.length < 5){
		for(var i=0; i < results.length; i++){
			ary[ary.length] = results[i];
		}
	}
	else {
		for(var i=0; i < results.length; i++){
			if(results[i].get("name") = username){
				if()
				ary[ary.length] = results[i-2];
				ary[ary.length] = results[i-1];
				ary[ary.length] = results[i];
				ary[ary.length] = results[i+1];
				ary[ary.length] = results[i+2];
			}
		}
	}
*/

	ary = [ary0, ary1, ary2, ary3, ary4];
>>>>>>> Stashed changes
	makeHtml(ary);
}




var makeHtml = function(results){
//function makeHtml(results){
	// $("#display").append("hoge");

<<<<<<< Updated upstream
	//for(var i=0; i < 5; i++){
=======


>>>>>>> Stashed changes
	for(var i=0; i < results.length; i++){

		//var entry = results[i];
		//var image = entry.get("URL");
		//var name = entry.get("name");
		//var region = entry.get("region");
		//var sum_p = entry.get("sum_p");

<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
		var image = results[i][0];
		var name = results[i][1];
		var region = results[i][2];
		var sum_p = results[i][3];

<<<<<<< Updated upstream
		var item = '<tr><th><img src="' + image + '"></th><th>' + name + '</th><th>' + region + '</th><th>' + sum_p + '</th></tr>';		
		
		$("#tbody").append(item);
=======

		if(name != null){
			var item = '<tr><th><img src="' + image + '" width="50" height="50"></th><th>' + name + '</th><th>' + region + '</th><th>' + sum_p + '</th></tr>';
			$("#tbody").append(item);
		}
>>>>>>> Stashed changes
	}
}



var linkUser = function hoge(code){
document.f.arg.value=code;
document.f.submit();
}


$(document).ready(function(){
	//window.alert("Hello!");
	makeData();
	//showRanking();
})