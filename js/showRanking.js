
// とりあえず、画像を表示
// 

/*
var showRanking = function(){

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
		
}
*/


//var makeData = function(results){
var makeData = function(){
//function makeData(){
	//var username = Parse.User.current().get("username");
	var username = "Keiko";

	var ary0 = ['./img/Miho_Tanaka.jpg', 'Miho_Tanaka', 'Tokyo', '400000002'];
	var ary1 = ['./img/Tsubasa_Honda.jpg', 'Tsubasa_Honda', 'Tokyo', '400000000'];
	var ary2 = ['./img/Reina_Triendl.jpg', 'Reina_Triendl', 'Overseas', '200000004'];
	var ary3 = ['./img/Keiko_Kitagawa.jpg', 'Keiko_Kitagawa', 'Hyogo', '200000000'];
	var ary4 = ['./img/Dameo_Marude.jpg', 'Dameo_Marude', 'Tottori', '1002'];

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
	makeHtml(ary);
}



var makeHtml = function(results){
//function makeHtml(results){
	// $("#display").append("hoge");



	//for(var i=0; i < 5; i++){
	for(var i=0; i < results.length; i++){

		//var entry = results[i];
		//var image = entry.get("URL");
		//var name = entry.get("name");
		//var region = entry.get("region");
		//var sum_p = entry.get("sum_p");


		var image = results[i][0];
		var name = results[i][1];
		var region = results[i][2];
		var sum_p = results[i][3];


		if(name != null){
			var item = '<tr><th><img src="' + image + '" width="50" height="50"></th><th>' + name + '</th><th>' + region + '</th><th>' + sum_p + '</th></tr>';
			$("#tbody").append(item);
		}
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