$(document).ready(function(){
	//header的banner轮播图
	var img_width = $('.header_banner>ul>li').width(); //图片的宽度
	var img_num = $('.header_banner>ul>li').length;    //li的个数
	var num = 0;                                       //指向当前的图片

	//图片切换过程
	function play(){
		var img_i = num* -img_width + "px";
		
		$('.header_banner > ul').animate({opacity:0.85},300,function(){

			//改变控制点的样式
			for(var i=0; i<img_num; i++)
			{ 
				$('.header_banner .dot span').css('background','#000');	
			}
			$('.header_banner .dot span').eq(num).css('background','#fff');
			$(this).css("left",img_i);
			$(this).animate({opacity:1},300);
		});
	}

	//图片切换到下一张
	$('.icon_next').click(function(){
		num++;
		if (num>=img_num)
		{
			num = 0;
		}
		play();
	});

	//图片切换到上一张
	$('.icon_prev').click(function(){
		if (num === 0)
		{
			num = img_num-1;
		}
		else{
			num--;
		}
		play();
	});
	
	//控制点来控制切换
	$('.dot>span').click(function(){
		num = $(this).index();
		play();
	});

	
	var img_w = $('.banner>ul>li').width();
	var img_len = $('.banner>ul>li').length;
	var number = 0;

	//图片切换过程
	function placePlay(){
		var img_l = number* -img_w + "px";
		
		$('.banner > ul').animate({opacity:0.9},500,function(){

			//改变控制点的样式
			for(var i=0; i<img_len; i++)
			{ 
				$('.banner .dot span').css('background','#fff');	
			}
			$('.banner>.dot>span').eq(number).css('background','#e54e5c');
			$(this).css("left",img_l);
			$(this).animate({opacity:1},500);
		});
	}
	
	//图片切换到下一张
	function AutoPlay(){
		number++;
		if (number>=img_len)
		{
			number = 0;
		}
		placePlay();
	}

	setInterval(AutoPlay,2000);
	
	
	//控制点来控制切换
	$('.banner>.dot>span').click(function(){
		number = $(this).index();
		placePlay();
	});


	//footer icon的显示与隐藏
	$('.icon > .first').mouseenter(function(){
		$('.footer > .hide').css("display","block");
	});

	$('.icon > .first').mouseleave(function(){
		$('.footer > .hide').css("display","none");
	});
	
	//header导航鼠标移上去效果
	$('.header >  .h_nav a').mouseenter(function(){
		$(this).css("color","#f60");
	});
	//鼠标移开效果
	$('.header .h_nav a').mouseleave(function(){
		$(this).css("color","#fff");
	});

	//header 导航的滚轮事件
	$(document).on("mousewheel DOMMouseScroll", function (e) {
    // jquery 兼容的滚轮事件
    var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
                (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox

    var cur_top = $(window).scrollTop();   //当前滚过的高度
	if(cur_top === 0)
	{	
		$('.header_m').css("background","");
		$('.header > .logo_hide').css("display","none");
		$('.header > .finger_logo').css({"display":"block"});
		$('.header a').css("color","#fff");	

		$('.header >  .h_nav a').mouseenter(function(){
				$(this).css("color","#f60");
			});

			$('.header .h_nav a').mouseleave(function(){
				$(this).css("color","#fff");
			});
	}
	else{
		if (delta > 0) {
			
		   
		} 
		else if (delta < 0) {
			// 向下滚
			$('.header_m').css("background","#fff");
			$('.header > .logo_hide').css("display","block");
			$('.header > .finger_logo').css("display","none");
			$('.header a').css("color","#333");

			$('.header >  .h_nav a').mouseenter(function(){
				$(this).css("color","#f60");
			});

			$('.header .h_nav a').mouseleave(function(){
				$(this).css("color","#333");
			});
		}
	}
});
});