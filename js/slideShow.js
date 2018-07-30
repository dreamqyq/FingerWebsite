slideShow($('.header_banner'))
slideShow($('.main_banner > .banner'))
function slideShow($view){
  let n = 0
  let $slideBox = $view.children('.slideBox').eq(0)
  let $slidePic = $slideBox.children()
  let $dotsBtn = $view.children('.dots').children('span')
  let size = $slidePic.length
  let timer = null
  let width = $slidePic.width()
  init()
  startSlide()

  $(document).on('visibilitychange',() => {
    if(document.hidden){
      window.clearInterval(timer)
    }else{
      startSlide()
    }
  })

  $($view).on('mouseover',function(){
    clearInterval(timer)
  })
  $($view).on('mouseleave',function(){
    startSlide()
  })

  $dotsBtn.on('click',function(e){
    let index = $(e.currentTarget).index()
    changePic(index)
  })
  $('.icon_next').on('click',function(){
    changePic(n+1)
  })
  $('.icon_prev').on('click',function(){
    changePic(n-1)
  })

  function init(){
    let $picFirst = $slidePic.eq(0).clone(true)
    let $picLast = $slidePic.eq(size-1).clone(true)
    $slideBox.append($picFirst)
    $slideBox.prepend($picLast)
    $slideBox.css('transform',`translateX(-${width}px)`)
  }
  function startSlide(){
    timer = setInterval(() => {
      changePic(n+1)
    },2000)
    return timer
  }
  function changePic(index){
    if(index >= size){
      index = 0
    }else if(index < 0){
      index = size-1
    }
    let previousIndex = n % size
    if(previousIndex === 0 && index === size-1){
      $slideBox.css('transform','translateX(0px)')
               .one('transitionend',() => {
                 $slideBox.hide().offset()
                 $slideBox.css('transform',`translateX(-${size*width}px)`)
                          .show()
               })
    }else if(previousIndex === size -1 && index === 0){
      $slideBox.css('transform',`translateX(-${(size+1)*width}px)`)
               .one('transitionend',() => {
                 $slideBox.hide().offset()
                 $slideBox.css('transform',`translateX(-${width}px)`)
                          .show()
               })
    }else{
      $slideBox.css('transform',`translateX(${-width*(index+1)}px)`)
    } 
    $dotsBtn.eq(index).addClass('active').siblings().removeClass('active')
    n = index
  }
}
