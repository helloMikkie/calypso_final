

function openTab(evt, name){
  const tabContents = document.querySelectorAll('div.info')
  const tablinks = document.getElementsByClassName("circle")
  const titleTag = document.querySelector('title')

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

// const circleTags = document.querySelectorAll(".circle")
// const titleTag = document.querySelector('.title h3')
// const arr = ["innehalten", 'wertfreie Impulse geben', "Feedback moderieren"]
// let i = 0


// circleTags.forEach((circle, index) =>{

//   circle.addEventListener('click', function(){
//       // console.log(tab.name)
//       titleTag.innerHTML = this.name
//       this.style.backgroundColor = "black"
//     })


// })




var inner = document.querySelector('#inner');
var centered = document.querySelector('#centered');
var outer = document.querySelector('#outer');

var eins = document.querySelector('#eins');
var zwei = document.querySelector('#zwei');
var drei = document.querySelector('#drei');

// Create a timeline with default parameters
var animation = anime.timeline({
    // duration: 1000,
    loop: true,
    // direction:'alternate',
    easing: 'easeOutQuad',
});

// Add children
animation
.add({
  targets: [],
  opacity: "red",
  scale: 1.2,
  delay: 20,
  easing: 'easeOutQuad'
 
})
.add({
  targets: [inner,eins],
  opacity: 1,
  duration: 2000,
})
.add({
  targets: [eins],
  opacity: 0,
})
.add({
  targets: [centered,zwei],
  opacity: 1,
  duration: 2000,
  
})
.add({
  targets: [zwei],
  opacity: 0,
})
.add({
  targets: [outer,drei],
  opacity: 1,
  duration: 3000,
  
});