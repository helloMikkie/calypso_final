const moduleButtons = document.querySelectorAll('div.openButton')


moduleButtons.forEach( button =>{
  button.addEventListener('click', function(){

    button.classList.toggle('close')


    const panel = this.nextElementSibling
    const text = this.previousElementSibling
    panel.classList.toggle('open')
    text.classList.toggle('test')
  })
})
