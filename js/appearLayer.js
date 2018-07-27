!function(){
  let view = document.querySelectorAll('.productList > li')
  let controller = {
    view : null,
    init : function(view){
      this.view = view
      this.bindEvent()
    },
    bindEvent : function(){
      let view = this.view
      for(let i = 0 ;i < view.length ;i ++){
        view[i].addEventListener('mouseover',(e) => {
          e.currentTarget.classList.add('active')
        })
        view[i].addEventListener('mouseleave',(e) => {
          e.currentTarget.classList.remove('active')
        })
      }
    }
  }
  controller.init(view)

}.call()
