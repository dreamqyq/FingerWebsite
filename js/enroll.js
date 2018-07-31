$(document).ready(function() {
  $(".register a").addClass("next");
  $(".register a:first-child").removeClass("next").addClass("first");
  //设置初始变量
  var flag = -1;
  var num = 0;
  var img_w = $(".content").width();
  var img_all = $(".hd").length;
  function play() {
    var img_i = num * -img_w + "px";
    $(".hd").animate({
      opacity: "1"
    }, 100, function() {
      $(this).css("transform", `translateX(${img_i})`);
      $(".register").find("a").removeClass("first next");
      $(".register").find("a").eq(num).addClass("first").siblings().addClass("next");
    })
  }
  $(".register").find("a").click(function() {
    num = $(this).index();
    play();
  })
});
