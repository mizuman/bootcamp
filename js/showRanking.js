function ohayou() {
    //window.alert("Hello!");
    makeHtml();
}
// とりあえず、画像を表示
// 




var showRanking = function(){

	var user = Parse.User.current().get("username");

	var mysql = require('mysql');
	
	var connection = mysql.createConnection({
		host     : '153.149.5.92', //接続先ホスト
		user     : 'thanks',      //ユーザー名
		password : 'thanksthanks',  //パスワード
		database : 'user'    //DB名
	});


	//SQL文を書く
	var sql = 'SELECT * FROM user WHERE UserNO = ?;';
	//var sql = 'SELECT * FROM user BY LIMIT 0, 10;';
	//プレースホルダに差し込むデータ
	var userId = '012345678';

	//接続します
	connection.connect();


	//プレースホルダー使ってSQL発行
	var query = connection.query(sql, [userId]);


	query.find({
		success:function(results){
			makeHtml(results);
		}
	});	
}





//var makeHtml = function(results){
function makeHtml(){
	// $("#display").append("hoge");

	//for(var i=0; i < results.length; i++){
	for(var i=0; i < 5; i++){
		//var entry = results[i];

		//var image = entry.get("URL");
		//var name = entry.get("name");
		//var region = entry.get("region");
		//var sum_p = entry.get("sum_p");
		
		var image = "imageURL";
		var name = "Name";
		var region = "Region";
		var sum_p = 0;

		var item = '<tr><th><img src="' + image + '"></th><th>' + name + '</th><th>' + region + '</th><th>' + sum_p + '</th></tr>';		
		
		$("#tbody").append(item);
	}
}

var linkUser = function hoge(code){
document.f.arg.value=code;
document.f.submit();
}



$(document).ready(function(){
	showRanking();
})