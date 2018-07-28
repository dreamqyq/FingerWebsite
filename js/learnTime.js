!function(){
  let view = document.querySelector('.finger_stytime')
  let controller = {
    view : null,
    initial : 0,
    learnTime : null,
    influence : null,
    amountTime : null,
    init : function(view){
      this.view = view
      this.learnTime = view.querySelector('#learnTime')
      this.influence =  view.querySelector('#influence')
      this.amountTime = view.querySelector('#amountTime')
      this.bindEvent()
    },
    bindEvent : function(){
      let view  = this.view
      window.addEventListener('scroll',() => {
        let destination = view.offsetTop + view.clientHeight + 80
        if(window.scrollY > destination){
          this.onceEvent()
        }
      })   
    },
    // The event will only be executed once
    onceEvent : function(){
      // 
      let isExecuted = false
      return function(){
        if(!isExecuted){
          isExecuted = true
          this.view.classList.add('offset')
          this.addNumber(this.learnTime)
          this.addNumber(this.influence)
          this.addNumber(this.amountTime)
        }
      }
    }(),
    // Dynamic addition data of span
    addNumber : function(element){
      let initial = this.initial
      let dataValue = parseInt(element.dataset.value,10) // number
      let addPerSecond  = dataValue / 500 
      let timer=  setInterval(() => {
        element.textContent = parseInt(initial += addPerSecond).toLocaleString() // string
        if(initial >= dataValue){
          clearInterval(timer)
          element.textContent = dataValue.toLocaleString()
        }
      },1)
    }
  }
  controller.init(view)
}.call()
