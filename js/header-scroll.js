const hinweisTag = document.querySelector('.hinweis')
const hinweisButtonTag = hinweisTag.querySelector('.hinweisButton')
const headerBarTag = document.querySelector('.headerBar')


// open hinweis
hinweisButtonTag.addEventListener('click', function(){
  hinweisTag.classList.toggle('open')
})

// button
document.addEventListener('scroll', function(){

    const pixels = window.pageYOffset
    const hero = document.querySelector('.hero-material')

    const heroHeight = hero.getBoundingClientRect().height / 2

  if(pixels > 300){
    headerBarTag.style.opacity = 1
    hinweisTag.classList.add('openOnScroll')

  } else{
    headerBarTag.style.opacity = 0
    hinweisTag.classList.remove('openOnScroll')
  }

})
