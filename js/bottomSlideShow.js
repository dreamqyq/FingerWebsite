!function(){
  let $bottom_view = $('.main_banner > .banner')
  let controller = {
    view : null,
    slideBox : null,
    size : null,
    dotsBtn : null,
    index : 0,
    width : null,
    init : function(view){
      this.view = view
      this.slideBox = this.view.children('.slideBox').eq(0)
      this.dotsBtn = this.view.children('.dots').children()
      this.width = view.width()
      this.size = this.dotsBtn.length
      this.bindEvent()
      this.btnClick()
    },
    bindEvent : function(){
      this.startSlide()
      this.view.on('mouseover',() => {
        clearInterval(this.timer) 
      })
      this.view.on('mouseleave',() => {
        this.startSlide()
      })
    },
    startSlide : function(){
      this.timer = setInterval(()=>{ 
        this.index ++
        this.changePic(this.index)
      },2000)
    },
    changePic : function(index){
      index = this.checkIndex(index)
      this.slideBox.css('transform',`translateX(-${index*this.width}px)`)
      this.dotsBtn
        .eq(index).addClass('active')
        .siblings().removeClass('active')  
      this.index = index
    },
    btnClick : function(){
      this.dotsBtn.on('click',(e) => {
        let index = $(e.currentTarget).index()
        this.changePic(index)
      })
    },
    checkIndex : function(index){
      if(index >= this.size){
        index = 0
      }else if(index < 0){
        index = this.size - 1
      }
      return index
    }
  }
  controller.init($bottom_view)
}.call()

