!function(){
  let view_productList = document.querySelectorAll('.productList > li')
  let view_teacherList = document.querySelectorAll('.teacherList > li')
  let view_courseList = document.querySelectorAll('.courseList > li')
  let controller = {
    view : null,
    init : function(view){
      this.view = view
      this.bindEvent()
    },
    bindEvent : function(){
      let view = this.view
      for(let i = 0; i < view.length; i++){
        view[i].addEventListener('mousemove',(e) => {
          e.currentTarget.classList.add('active')
        })
        view[i].addEventListener('mouseleave',(e) => {
          e.currentTarget.classList.remove('active')
        })
      }
    }
  }
  controller.init(view_productList)
  controller.init(view_teacherList)
  controller.init(view_courseList)
}.call()
