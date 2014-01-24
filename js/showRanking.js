
// とりあえず、画像を表示
// 
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

/*
	query.find({
		success:function(results){
			//makeHtml(results);
			makeData(results);
		}
	});
*/

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


//var makeData = function(results){
var makeData = function(){
//function makeData(){
	//var username = Parse.User.current().get("username");

	var ary0 = ['./img/Keiko_Kitagawa.jpg', 'Keiko', 'Hyogo', '100'];
	var ary1 = ['./img/Tsubasa_Honda.jpg', 'Tsubasa', 'Tokyo', '75'];
	var ary2 = ['./img/Miho_Tanaka.jpg', 'Miho', 'Tokyo', '50'];
	var ary3 = ['./img/Reina_Triendl.jpg', 'Reina', 'Overseas', '25'];
	var ary4 = ['./img/Dameo_Marude.jpg', 'Dameo', 'Tottori', '0'];

/*
	if(results.length < 5){
		for(var i=0; i < results.length; i++){
			var ary_few = [];
			ary_few[ary_few.length] = 

		
	}
	else {
		for(var i=0; i < results.length; i++){
			if(results[i].get("name") = username){
				ary0 = results[i-2];
				ary1 = results[i-1];
				ary2 = results[i];
				ary3 = results[i+2];
				ary4 = results[i+3];
			}
		}
	}
*/

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

		var item = '<tr><th><img src="' + image + '" width="50" height="50"></th><th>' + name + '</th><th>' + region + '</th><th>' + sum_p + '</th></tr>';		
		
		$("#tbody").append(item);
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