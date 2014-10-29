// variables
var $window = $(window), gardenCtx, gardenCanvas, $garden, garden;
var clientWidth = $(window).width();
var clientHeight = $(window).height();
var offsetX;
var offsetY;
var codeOffsetX;
var codeOffsetY;

var div_list;

$(function () {
    // setup garden
	$loveHeart = $("#loveHeart");
	offsetX = $loveHeart.width() / 2;
	offsetY = $loveHeart.height() / 2 - 55;

	codeOffsetX = $loveHeart.width() / 2 + 440;
	codeOffsetY = $loveHeart.height() / 2 - 55 ;

    $garden = $("#garden");
    gardenCanvas = $garden[0];
	gardenCanvas.width = $("#loveHeart").width();
    gardenCanvas.height = $("#loveHeart").height()
    gardenCtx = gardenCanvas.getContext("2d");
    gardenCtx.globalCompositeOperation = "lighter";
    garden = new Garden(gardenCtx, gardenCanvas);
	
    //create new_code
    div_list = new Array();
    func_create_new_code(content , div_list , true);
	adjustCodePosition();
	$("#new_code").typewriter();

	$("#content").css("width", $loveHeart.width() + $("#new_code").width());
	$("#content").css("height", Math.max($loveHeart.height(), $("#new_code").height()));
	$("#content").css("margin-top", Math.max(($window.height() - $("#content").height()) / 2, 10));
	$("#content").css("margin-left", Math.max(($window.width() - $("#content").width()) / 2, 10));

    // renderLoop
    setInterval(function () {
        garden.render();
    }, Garden.options.growSpeed);

});

//after fly
function FadeOut(){
			var content = document.getElementById("content");
			$("#new_code").fadeOut(1000 , function(){

			func_delete_code(content);
			var tmp_list = new Array();
			func_create_new_code(content , tmp_list , false);
			//$("#new_code").fadeOut();
			$("#new_code").fadeIn(5000);
			adjustCodePosition();
			});
}

$(window).resize(function() {
    var newWidth = $(window).width();
    var newHeight = $(window).height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

function getHeartPoint(angle) {
	var t = angle / Math.PI;
	var x = 19.5 * (16 * Math.pow(Math.sin(t), 3));
	var y = - 20 * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
	return new Array(offsetX + x, offsetY + y);
}

function getCodeHeartPoint(angle) {
	var t = angle / Math.PI;
	var x = 19.5 * (16 * Math.pow(Math.sin(t), 3));
	var y = - 20 * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
	return new Array(codeOffsetX + x, codeOffsetY + y);
}

//after fadeOut
function startHeartAnimation() {
	var interval = 50;
	var angle = 10;
	var heart = new Array();
	var animationTimer = setInterval(function () {
		var bloom = getHeartPoint(angle);
		var draw = true;
		for (var i = 0; i < heart.length; i++) {
			var p = heart[i];
			var distance = Math.sqrt(Math.pow(p[0] - bloom[0], 2) + Math.pow(p[1] - bloom[1], 2));
			if (distance < Garden.options.bloomRadius.max * 1.2) {
				draw = false;
				break;
			}
		}
		if (draw) {
			heart.push(bloom);
			garden.createRandomBloom(bloom[0], bloom[1]);
		}
		if (angle >= 30) {
			clearInterval(animationTimer);
			showMessages();
		} else {
			angle += 0.2;
		}
	}, interval);
}

//after typewriter
function fly(div_list){

   var length = div_list.length;
   var cluster = 20/length;
   var div_code_id = 0;

   var interval_x = 0; // x:1~20 speed:(500/400)*(400-x*x)+10 ;  x:20~length speed:10
   var code_interval = 510;
   var code_angle = 10;

   func = function () {
      
      var position = getCodeHeartPoint(code_angle);
      
      code_fly(div_code_id , position[0] , position[1]);
     
      if (code_angle >= 30) {

        setTimeout(function () {
         	FadeOut();			
			}, 2000);

       	setTimeout(function () {
			startHeartAnimation();
			}, 3000);

      } else {
         code_angle += cluster;
         if(div_code_id<length-1){
         	div_code_id++;	
         }

        //time
      	if(interval_x<=20){
      		code_interval = (500/400)*(400 - interval_x * interval_x)+10;	
      		interval_x++;
      	}
      	else{
      		code_interval=10;
      	}
      	setTimeout(func , code_interval);
      }
   }

   //start first time
   setTimeout(func , code_interval);

}

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<' ) {
					progress = str.indexOf('>', progress) + 1;
				}
				//space &nbsp
				else if(current == '&'){
					progress = str.indexOf(';', progress) + 1;
				}
				else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);

					//fly
					fly(div_list);
				}
			}, 30);
		});
		return this;
	};
})(jQuery);

function timeElapse(date){
	var current = Date();
	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
	var days = Math.floor(seconds / (3600 * 24));
	seconds = seconds % (3600 * 24);
	var hours = Math.floor(seconds / 3600);
	if (hours < 10) {
		hours = "0" + hours;
	}
	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60);
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	seconds = seconds % 60;
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	var result = "<span class=\"digit\">" + days + "</span> days <span class=\"digit\">" + hours + "</span> hours <span class=\"digit\">" + minutes + "</span> minutes <span class=\"digit\">" + seconds + "</span> seconds"; 
	$("#elapseClock").html(result);
}

function showMessages() {
	adjustWordsPosition();
	$('#messages').fadeIn(5000, function() {
		showLoveU();
	});
}

function adjustWordsPosition() {
	$('#words').css("position", "absolute");
	$('#words').css("top", $("#garden").position().top + 195);
	$('#words').css("left", $("#garden").position().left + 70);
}

function adjustCodePosition() {
	$('#new_code').css("margin-top", ($("#garden").height() - $("#new_code").height()) / 2);
}

function showLoveU() {
	$('#loveu').fadeIn(3000);
}