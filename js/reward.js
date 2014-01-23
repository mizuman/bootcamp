
var requestReward = function() {
	alert("お申し込みありがとうございます");
}

var getRewardList = function() {

	var RewardList = new Array(5);

	showRewardList(RewardList);
}

var showRewardList = function(RewardList) {
	for(var i=0; i < RewardList.length; i++){
		var entry = RewardList[i];

		// var Reward = entry.get("Reward");
		// var point = entry.get("Point");

		var Reward = "プレゼント" + i;
		var point = 1000 + (i * 100);

		var item = '<tr><th>' + i + '</th><th>' + Reward + '</th><th>' + point + '</th><th><button type=button onclick="requestReward()">詳細</button><button type=button onclick="requestReward()">申込</button></th></tr>';
		$("tbody").append(item);
	}
}

$(document).ready(function(){
	getRewardList();
})



