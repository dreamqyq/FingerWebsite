!function(){
  let navBar = document.querySelector('.header')
  let logo = navBar.querySelector('.logo')
  let logoText = navBar.querySelector('.logo_text')
  window.addEventListener('scroll',() => {
    if(window.scrollY > 0){
      navBar.classList.add('active')
      logo.src = './images/website-logo1.png'
      logoText.src = './images/website-logo-text1.png'
    }else{
      navBar.classList.remove('active')
      logo.src = './images/website-logo.png'
      logoText.src = './images/website-logo-text.png'
    }
  })
}.call()
