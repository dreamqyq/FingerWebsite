$(document).ready(function(){
	$(".job-kind-menu").find(".job-kind-menu1").css("color","#000000");
	$(".technology").show();
	
	 $(".job-kind-menu").find(".job-kind-menu1").click(function(){
	 	$(this).css("color","#000000");
	 	$(".technology").show().siblings().hide();
	 	$(".job-kind-menu2").css("color","#666666");
	 	$(".job-kind-menu3").css("color","#666666");
	 	$(".job-kind-menu4").css("color","#666666");
	 	$(".job-kind-menu5").css("color","#666666");
	 	$(".job-kind-menu6").css("color","#666666");
	 	$(".job-kind-menu7").css("color","#666666");
	 	$(".job-kind-menu8").css("color","#666666");
	 });
	 
	 $(".job-kind-menu").find(".job-kind-menu2").click(function(){
	 	$(this).css("color","#000000");
	 	$(".product").show().siblings().hide();
	 	$(".job-kind-menu1").css("color","#666666");
	 	$(".job-kind-menu3").css("color","#666666");
	 	$(".job-kind-menu4").css("color","#666666");
	 	$(".job-kind-menu5").css("color","#666666");
	 	$(".job-kind-menu6").css("color","#666666");
	 	$(".job-kind-menu7").css("color","#666666");
	 	$(".job-kind-menu8").css("color","#666666");
	 });
	 
	 $(".job-kind-menu").find(".job-kind-menu3").click(function(){
	 	$(this).css("color","#000000");
	 	$(".maket").show().siblings().hide();
	 	$(".job-kind-menu2").css("color","#666666");
	 	$(".job-kind-menu1").css("color","#666666");
	 	$(".job-kind-menu4").css("color","#666666");
	 	$(".job-kind-menu5").css("color","#666666");
	 	$(".job-kind-menu6").css("color","#666666");
	 	$(".job-kind-menu7").css("color","#666666");
	 	$(".job-kind-menu8").css("color","#666666");
	 });
	 
	 $(".job-kind-menu").find(".job-kind-menu4").click(function(){
	 	$(this).css("color","#000000");
	 	$(".operation").show().siblings().hide();
	 	$(".job-kind-menu2").css("color","#666666");
	 	$(".job-kind-menu3").css("color","#666666");
	 	$(".job-kind-menu1").css("color","#666666");
	 	$(".job-kind-menu5").css("color","#666666");
	 	$(".job-kind-menu6").css("color","#666666");
	 	$(".job-kind-menu7").css("color","#666666");
	 	$(".job-kind-menu8").css("color","#666666");
	 });
	
	 $(".job-kind-menu").find(".job-kind-menu5").click(function(){
	 	$(this).css("color","#000000");
	 	$(".design").show().siblings().hide();
	 	$(".job-kind-menu2").css("color","#666666");
	 	$(".job-kind-menu3").css("color","#666666");
	 	$(".job-kind-menu4").css("color","#666666");
	 	$(".job-kind-menu1").css("color","#666666");
	 	$(".job-kind-menu6").css("color","#666666");
	 	$(".job-kind-menu7").css("color","#666666");
	 	$(".job-kind-menu8").css("color","#666666");
	 });
	 
	 $(".job-kind-menu").find(".job-kind-menu6").click(function(){
	 	$(this).css("color","#000000");
	 	$(".sales").show().siblings().hide();
	 	$(".job-kind-menu2").css("color","#666666");
	 	$(".job-kind-menu3").css("color","#666666");
	 	$(".job-kind-menu4").css("color","#666666");
	 	$(".job-kind-menu5").css("color","#666666");
	 	$(".job-kind-menu1").css("color","#666666");
	 	$(".job-kind-menu7").css("color","#666666");
	 	$(".job-kind-menu8").css("color","#666666");
	 });
	 
	 $(".job-kind-menu").find(".job-kind-menu7").click(function(){
	 	$(this).css("color","#000000");
	 	$(".teaching-research").show().siblings().hide();
	 	$(".job-kind-menu2").css("color","#666666");
	 	$(".job-kind-menu3").css("color","#666666");
	 	$(".job-kind-menu4").css("color","#666666");
	 	$(".job-kind-menu5").css("color","#666666");
	 	$(".job-kind-menu6").css("color","#666666");
	 	$(".job-kind-menu1").css("color","#666666");
	 	$(".job-kind-menu8").css("color","#666666");
	 });
	 
	 $(".job-kind-menu").find(".job-kind-menu8").click(function(){
	 	$(this).css("color","#000000");
	 	$(".finance").show().siblings().hide();
	 	$(".job-kind-menu2").css("color","#666666");
	 	$(".job-kind-menu3").css("color","#666666");
	 	$(".job-kind-menu4").css("color","#666666");
	 	$(".job-kind-menu5").css("color","#666666");
	 	$(".job-kind-menu6").css("color","#666666");
	 	$(".job-kind-menu7").css("color","#666666");
	 	$(".job-kind-menu1").css("color","#666666");
	 });
	 	
	 $(".foot-mid-left").mouseenter(function(){
		$(".vxpic").show();
	})
	
	$(".foot-mid-left").mouseleave(function(){
		$(".vxpic").hide();
	})	
	 	
});
