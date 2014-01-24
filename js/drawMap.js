var drawMap = function() {

	navWidth = $(".navbar").width();

	if(navWidth>400){
		$("#map").html('<img src="./img/T-Map_512x512.png">');
	}else{
		$("#map").html('<img src="./img/T-Map_512x512.png" width="' + navWidth + '">');
	}
}


$(document).ready(function() {
	drawMap();
});