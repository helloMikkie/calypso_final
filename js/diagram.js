

function openTab(evt, name){
  const tabContents = document.querySelectorAll('div.info')
  const tablinks = document.getElementsByClassName("circle")
  const titleTag = document.querySelector('feedback-title')

  tabContents.forEach(content =>{
    content.style.display = "none"
  })

  for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

  document.getElementById(name).style.display = "block"

  // document.getElementById(name).style.animation = "showContent 0.5s"
  evt.currentTarget.className += " active"

}

// close Modal Window

  const closeTag = document.querySelectorAll('.info div.modal-close')
  const tabs = document.querySelectorAll('div.info')

  closeTag.forEach(close =>{
    close.addEventListener('click', function(){

      tabs.forEach(tab=>{
          tab.style.display = "none"
      })
    })
  })


// Animation circles

const circleTags = document.querySelectorAll(".circle")
const titleTag = document.querySelector('.feedback-title h3')
const arr = ["innehalten", 'wertfreie Impulse geben', "Feedback moderieren"]
let i = 0


circleTags.forEach((circle, index) =>{

  circle.addEventListener('click', function(){
      // console.log(tab.name)
      titleTag.innerHTML = this.name
      this.style.backgroundColor = "black"
    })

  circle.animate([
      {backgroundColor:'#FC754B'},
      {backgroundColor:'white'},
      {backgroundColor:'#FC754B'},
      ],
        {
          delay: 500 * index,
          duration: 3000,
          iterations: Infinity
        }
      )
})


//  fadeing Titles

const slide = function(){
  titleTag.innerHTML = arr[i]
  titleTag.style.opacity  = 1

  setTimeout(next, 2000)
}
const next = function(){
  i++
  if(i > arr.length - 1){
    i = 0
  }
  titleTag.style.opacity  = 0

  setTimeout(slide,2000)
}

slide()
