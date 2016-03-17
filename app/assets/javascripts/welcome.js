$(document).ready(function() {
	var $firstCard = $('.first');
	var $secondCard = $('.second');
	var $thirdCard = $('.third');
	var $fourthCard = $('.fourth');
	var $fifthCard = $('.fifth');
	var $sixthCard = $('.sixth');
	var $seventhCard = $('.seventh');
	var $eighthCard = $('.eighth');
	var $ninthCard = $('.ninth');
	var $tenthCard = $('.tenth');
	var $eleventhCard = $('.eleventh');
	var $twelfthCard = $('.twelfth');
	var $gridBox = $('.grid_box');
	var BoxOpened = "";
	var ImgOpened = "";
	var Counter = 0;
	var ImgFound = 0;
	var Source = "#boxcard";
	var ImgSource = [
	  "https://image.freepik.com/free-icon/facebook-square-logo_318-40275.png",
	  "https://image.freepik.com/free-icon/instagram-logo_318-53344.png",
	  "http://nova.portalpaula.org/wp-content/uploads/2015/07/Twitter.png",
	  "http://www.casandoo.edu.mx/info/logo_facebook_blanco.png",
	  "http://aula-center.com/cursos/wp-content/uploads/sites/2/2014/07/HTML5-02.png",
	  "http://www.talcualdigital.com/Content/images/v3/Instagram.png",
	  "http://eastpoint.ge/plugin/img/youtub.png",
	  "https://danikamiller.files.wordpress.com/2015/02/unnamed.png",
	  "http://accentacappella.com/wp-content/uploads/PNG/512/social-034_soundcloud.png",
	  "http://giphy.com/static/img/giphy_logo_square_social.png"
	];

	function RandomFunction(MaxValue, MinValue) {
			return Math.round(Math.random() * (MaxValue - MinValue) + MinValue);
	}

	function ShuffleImages() {
		var ImgAll = $(Source).children();
		var ImgThis = $(Source + " div:first-child");
		var ImgArr = new Array();

		for (var i = 0; i < ImgAll.length; i++) {
			ImgArr[i] = $("#" + ImgThis.attr("id") + " img").attr("src");
			ImgThis = ImgThis.next();
		}
		
			ImgThis = $(Source + " div:first-child");
		
		for (var z = 0; z < ImgAll.length; z++) {
		var RandomNumber = RandomFunction(0, ImgArr.length - 1);

			$("#" + ImgThis.attr("id") + " img").attr("src", ImgArr[RandomNumber]);
			ImgArr.splice(RandomNumber, 1);
			ImgThis = ImgThis.next();
		}
	}


	$gridBox.click(function() {
		$(this).toggleClass('white-box');
	});

	$firstButton.click(function() {
		$firstButton.append(this.id);
		// reference logic here
	});


	put logic here

	// var BoxOpened = "";
	// var ImgOpened = "";
	// var Counter = 0;
	// var ImgFound = 0;

	// var Source = "#boxcard";

	// var ImgSource = [
	//   "https://image.freepik.com/free-icon/facebook-square-logo_318-40275.png",
	//   "https://image.freepik.com/free-icon/instagram-logo_318-53344.png",
	//   "http://nova.portalpaula.org/wp-content/uploads/2015/07/Twitter.png",
	//   "http://www.casandoo.edu.mx/info/logo_facebook_blanco.png",
	//   "http://aula-center.com/cursos/wp-content/uploads/sites/2/2014/07/HTML5-02.png",
	//   "http://www.talcualdigital.com/Content/images/v3/Instagram.png",
	//   "http://eastpoint.ge/plugin/img/youtub.png",
	//   "https://danikamiller.files.wordpress.com/2015/02/unnamed.png",
	//   "http://accentacappella.com/wp-content/uploads/PNG/512/social-034_soundcloud.png",
	//   "http://giphy.com/static/img/giphy_logo_square_social.png"
	// ];

	// function RandomFunction(MaxValue, MinValue) {
	// 		return Math.round(Math.random() * (MaxValue - MinValue) + MinValue);
	// 	}
		
	// function ShuffleImages() {
	// 	var ImgAll = $(Source).children();
	// 	var ImgThis = $(Source + " div:first-child");
	// 	var ImgArr = new Array();

	// 	for (var i = 0; i < ImgAll.length; i++) {
	// 		ImgArr[i] = $("#" + ImgThis.attr("id") + " img").attr("src");
	// 		ImgThis = ImgThis.next();
	// 	}
		
	// 		ImgThis = $(Source + " div:first-child");
		
	// 	for (var z = 0; z < ImgAll.length; z++) {
	// 	var RandomNumber = RandomFunction(0, ImgArr.length - 1);

	// 		$("#" + ImgThis.attr("id") + " img").attr("src", ImgArr[RandomNumber]);
	// 		ImgArr.splice(RandomNumber, 1);
	// 		ImgThis = ImgThis.next();
	// 	}
	// }

	// function ResetGame() {
	// 	ShuffleImages();
	// 	$(Source + " div img").hide();
	// 	$(Source + " div").css("visibility", "visible");
	// 	Counter = 0;
	// 	$("#success").remove();
	// 	$("#counter").html("" + Counter);
	// 	BoxOpened = "";
	// 	ImgOpened = "";
	// 	ImgFound = 0;
	// 	return false;
	// }

	// function OpenCard() {
	// 	var id = $(this).attr("id");

	// 	if ($("#" + id + " img").is(":hidden")) {
	// 		$(Source + " div").unbind("click", OpenCard);
		
	// 		$("#" + id + " img").slideDown('fast');

	// 		if (ImgOpened == "") {
	// 			BoxOpened = id;
	// 			ImgOpened = $("#" + id + " img").attr("src");
	// 			setTimeout(function() {
	// 				$(Source + " div").bind("click", OpenCard)
	// 			}, 300);
	// 		} else {
	// 			CurrentOpened = $("#" + id + " img").attr("src");
	// 			if (ImgOpened != CurrentOpened) {
	// 				setTimeout(function() {
	// 					$("#" + id + " img").slideUp('fast');
	// 					$("#" + BoxOpened + " img").slideUp('fast');
	// 					BoxOpened = "";
	// 					ImgOpened = "";
	// 				}, 400);
	// 			} else {
	// 				$("#" + id + " img").parent().css("visibility", "hidden");
	// 				$("#" + BoxOpened + " img").parent().css("visibility", "hidden");
	// 				ImgFound++;
	// 				BoxOpened = "";
	// 				ImgOpened = "";
	// 			}
	// 			setTimeout(function() {
	// 				$(Source + " div").bind("click", OpenCard)
	// 			}, 400);
	// 		}
	// 		Counter++;
	// 		$("#counter").html("" + Counter);

	// 		if (ImgFound == ImgSource.length) {
	// 			$("#counter").prepend('<span id="success">You Found All Pictues With </span>');
	// 		}
	// 	}
	// }

	// $(function() {

	// for (var y = 1; y < 3 ; y++) {
	// 	$.each(ImgSource, function(i, val) {
	// 		$(Source).append("<div id=card" + y + i + "><img src=" + val + " />");
	// 	});
	// }
	// 	$(Source + " div").click(OpenCard);
	// 	ShuffleImages();
	// });







});