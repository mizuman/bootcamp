
// とりあえず、画像を表示
// 
var drawChart = function(){
	var chartWidth = $("#chart").width();
	var url = "http://chart.apis.google.com/chart?chs=" + chartWidth + "x300&chd=t:10,30,60|54,12,87|0,30,70,80|15,54,35,45&cht=lxy&chco=ff0000,0000ff";
	$("#chart").html("<img src=" + url + ">");
}

$(document).ready(function(){
	drawChart();
})