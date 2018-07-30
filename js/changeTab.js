! function() {
  let btn = document.querySelectorAll('.job-kind-menu-btn')
  let details = document.querySelectorAll('.job-kind-details')
  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function() {
      for (let j = 0; j < btn.length; j++) {
        btn[j].classList.remove('active')
        details[j].classList.remove('active')
      }
      btn[i].classList.add('active')
      details[i].classList.add('active')
      details[i].parentNode.style.height = `${details[i].clientHeight}px`
    })
  }
}.call()
