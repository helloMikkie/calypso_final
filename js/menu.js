

const menubuttonTag = document.querySelector('div.menu-button')
const menuTag = document.querySelector('div.menu')
const logoTag = document.querySelector('nav .logo a')

const tags = document.querySelectorAll('.menu-content .menuLink')

const accordionButton = document.querySelectorAll(".accordionButton")
const accordion = document.querySelectorAll('div.accordion')
const panels = document.querySelectorAll('.panel')

let time = 0;



menubuttonTag.addEventListener('click', function(){
  menuTag.classList.toggle('open')

  // Wenn Menu sich öffnet erscheinen die Links animiert

    tags.forEach(tag =>{

    const isOpen = tag.classList.contains('show')

    setTimeout(function(){
      tag.classList.remove('show')
    },time)

    if(!isOpen){
      setTimeout(function(){
        tag.classList.add('show')
      },time)
    }
  time += 30
})

  time = 0


  if(menuTag.classList.contains('open')){
    menubuttonTag.innerHTML = '<img src="images/icons/close.svg">'
    // menubuttonTag.style.backgroundColor = "#fff"
    menubuttonTag.classList.add('open')
    logoTag.style.color = '#fff'
  } else {
    menubuttonTag.innerHTML = '<img src="images/icons/burger.svg">'
    // menubuttonTag.style.backgroundColor = ""
    menubuttonTag.classList.remove('open')
    logoTag.style.color = '#000'

    // immer geschlossener Zustand bei öffnen des Menues
    panels.forEach(myPanel =>{
      myPanel.style.maxHeight = "";
    })
  }
})


// Menuliste öffnen/schliessen auf Button-click

 accordionButton.forEach(tag =>{

   tag.addEventListener('click', function(){


       const nextPanel = this.nextElementSibling
       const nextPanelOpen = nextPanel.style.maxHeight

       panels.forEach(myPanel =>{
         myPanel.style.maxHeight = "";

       })
       if(!nextPanelOpen){
         nextPanel.style.maxHeight = nextPanel.scrollHeight + "px";

       }


     })

     })
