	var img_width = $('.header_banner>ul>li').width();
	var img_num = $('.header_banner>ul>li').length;
	var num = 0;


	$('.icon_next').click(function() {
	  num++;
	  if (num >= img_num) {
	    num = 0;
	  }
	  play();
	});

	$('.icon_prev').click(function() {
	  if (num === 0) {
	    num = img_num - 1;
	  } else {
	    num--;
	  }
	  play();
	});

	$('.dot>span').click(function() {
	  num = $(this).index();
	  play();
	});


	var img_w = $('.banner>ul>li').width();
	var img_len = $('.banner>ul>li').length;
	var number = 0;


	setInterval(AutoPlay, 2000);


	$('.banner>.dot>span').click(function() {
	  number = $(this).index();
	  placePlay();
	});


	$('.icon > .first').mouseenter(function() {
	  $('.footer > .hide').css("display", "block");
	});

	$('.icon > .first').mouseleave(function() {
	  $('.footer > .hide').css("display", "none");
	});

	$('.header >  .h_nav a').mouseenter(function() {
	  $(this).css("color", "#f60");
	});
	$('.header .h_nav a').mouseleave(function() {
	  $(this).css("color", "#fff");
	});

  // some function
	function play() {
	  var img_i = num * -img_width + "px";

	  $('.header_banner > ul').animate({
	    opacity: 0.85
	  }, 300, function() {

	    for (var i = 0; i < img_num; i++) {
	      $('.header_banner .dot span').css('background', '#000');
	    }
	    $('.header_banner .dot span').eq(num).css('background', '#fff');
	    $(this).css("left", img_i);
	    $(this).animate({
	      opacity: 1
	    }, 300);
	  });
	}
	function placePlay() {
	  var img_l = number * -img_w + "px";

	  $('.banner > ul').animate({
	    opacity: 0.9
	  }, 500, function() {

	    for (var i = 0; i < img_len; i++) {
	      $('.banner .dot span').css('background', '#fff');
	    }
	    $('.banner>.dot>span').eq(number).css('background', '#e54e5c');
	    $(this).css("left", img_l);
	    $(this).animate({
	      opacity: 1
	    }, 500);
	  });
	}
	function AutoPlay() {
	  number++;
	  if (number >= img_len) {
	    number = 0;
	  }
	  placePlay();
	}
