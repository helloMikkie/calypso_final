const scrollikonTag = document.querySelector('.subnavigation-ikon')

scrollikonTag.addEventListener('click', function(event){
    event.preventDefault()

    const href = this.getAttribute('href')
    const topElement = document.querySelector(href).offsetTop - 80
    window.scroll({
      top: topElement, behavior: 'smooth'
    })
})
