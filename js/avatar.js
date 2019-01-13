const avatarTag = document.querySelector('div.avatar')
const sections = document.querySelectorAll('section')
const tippTag = document.querySelector('.avatar-tipp')

document.addEventListener('scroll', function(){

  const pixels = window.pageYOffset


   sections.forEach(section =>{
      const sectionTop = section.offsetTop
      const delay = 300
      const inViewport = sectionTop - window.innerHeight + delay

      // console.log(sectionTop)

      if(inViewport < pixels){

        tippTag.innerHTML = section.getAttribute('data-tipp')

        const hasData = section.hasAttribute('data-tipp')


          if(hasData){
          avatarTag.classList.add('show')
          tippTag.style.display ="block"
        } else{
          avatarTag.classList.remove('show')
          tippTag.style.display ="none"
        }

      }

   })
})


avatarTag.addEventListener('click', function(event){

  tippTag.classList.toggle('open-tipp')
  event.preventDefault()

})
