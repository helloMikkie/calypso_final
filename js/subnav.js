
const subnavTabs = document.querySelectorAll('.subnavigation .subnavTab')
const topScroll = document.querySelector('.scrolltoTop .topScroll')

console.log(subnavTabs)

subnavTabs.forEach(link =>{
link.addEventListener('click', (event) =>{
  event.preventDefault()



  const href = link.getAttribute('href')
  const topElement = document.querySelector(href).offsetTop - 80
  window.scroll({
    top: topElement, behavior: 'smooth'

  })

})

})

topScroll.addEventListener('click', function(event){
  event.preventDefault()

  const href = this.getAttribute('href')
  const topElement = document.querySelector(href).offsetTop - 80
  window.scroll({
    top: topElement, behavior: 'smooth'
  })
})
