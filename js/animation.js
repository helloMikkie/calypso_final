const animatedTags = document.querySelectorAll('section')
const titleTag = document.querySelector('.hero-chapterTitle')
const hiddenTitleTag = document.querySelector('.hiddenTitle')

const parallaxSections = document.querySelectorAll('.materialImage')



// Einblenden der Materialien

animatedTags.forEach(tag => {
  tag.style.opacity = 0
})

const fadeIn = function () {

  let delay = 0.25

  animatedTags.forEach(tag => {
    const tagTop = tag.getBoundingClientRect().top
    const tagBottom = tag.getBoundingClientRect().bottom

    if (tagTop < window.innerHeight && tagBottom > 0) {
      tag.style.animation = `fadein 1s ${delay}s both`
      delay = delay + 0.25
    } else {
      tag.style.opacity = 0
      tag.style.animation = ""
    }
  })
}

// Einblenden des Titels im Header

const showTitle = function(){

  const titleTop = titleTag.offsetTop
  const titleHeight = titleTag.getBoundingClientRect().height

  if(titleTop < window.pageYOffset - titleHeight){
    hiddenTitleTag.style.display = "block"
    hiddenTitleTag.style.animation = "fadein 0.5s"
  } else {
    hiddenTitleTag.style.display = "none"
    hiddenTitleTag.style.animation = ""
  }
}

 // Parallax für Materialien

const parallax = function(){

  const topViewPort = window.pageYOffset
  const midViewPort = topViewPort + (window.innerHeight / 2)

  parallaxSections.forEach(section =>{
    const topSection = section.offsetTop
    const midSection = topSection + (section.offsetHeight / 2)

    const distance = midViewPort - midSection
    const parallaxTags = section.querySelectorAll('[data-parallax]')
    console.log(parallaxTags)
    parallaxTags.forEach(tag =>{
      const speed = parseFloat(tag.getAttribute('data-parallax'))
      tag.style.transform =`translate(0,${distance * speed}px)`
    })

  })
}






fadeIn()

document.addEventListener('scroll', function(){

  fadeIn()
  showTitle()
  parallax()
  // console.log(parallaxSections)

})
