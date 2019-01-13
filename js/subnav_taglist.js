const taglist = document.querySelectorAll('.subnavigation ul li  a')
const tagSections = document.querySelectorAll('section, .wrapper')

document.addEventListener('scroll', function(){

  const pixels = window.pageYOffset
  let counter = 0

tagSections.forEach(section => {

  if(section.offsetTop < pixels){
    counter = counter + 1
    }

    taglist.forEach(tag =>{
      tag.classList.remove('activeTag')
    })
  // Zähler auf index der Taglist übertragen
  taglist[counter].classList.add('activeTag')


}) // sections


}) // scroll
