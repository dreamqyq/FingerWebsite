$(function(){
    $('body').UiBackTop();
})
//返回顶部组件
$.fn.UiBackTop=function () {
    var ui= $(this),
        topBtn=$('<a class="ui-top" href="#7"></a>'),
        winHeight=$(window).height();
    ui.append(topBtn);
    $(window).scroll(function () {
        var scrollHeight=$(window).scrollTop();
        if(scrollHeight>winHeight){
          topBtn.addClass('active')
        }else{
          topBtn.removeClass('active')
        }
    });
    topBtn.click(function () {
        $('body,html').animate({
            'scrollTop':0
        },300)
    })
}

