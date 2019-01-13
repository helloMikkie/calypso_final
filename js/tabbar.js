
// function openTab(name){
//   const tabContents = document.querySelectorAll('div.tabcontent')
//
//   tabContents.forEach(content =>{
//     content.style.display = "none"
//   })
//   document.getElementById(name).style.display = "block"
//     document.getElementById(name).style.animation = "showContent 0.5s"
// }
//
//
// function showBar(name){
//   const subTabs = document.querySelectorAll('div.subTab')
//   const tabButtons = document.querySelectorAll('.tabbar .tablinks')
//
//   subTabs.forEach(tab =>{
//     tab.classList.remove('open')
//   })
//
//
//     document.getElementById(name).classList.add('open')
//     document.getElementById(name).style.animation = "showContent 0.5s"
// }


// Content
function openTab(evt, name){
  const tabContents = document.querySelectorAll('div.tabcontent')
  const tablinks = document.getElementsByClassName("tablinks")

  tabContents.forEach(content =>{
    content.style.display = "none"
  })

  for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

  document.getElementById(name).style.display = "block"
  document.getElementById(name).style.animation = "showContent 0.5s"
  evt.currentTarget.className += " active"
}

// Subtab Leiste

function showBar(evt, name){
  const subTabs = document.querySelectorAll('div.subTab')
  const tablinks = document.getElementsByClassName("tablinks")

  subTabs.forEach(tab =>{
  tab.style.display = "none"
  })

  for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

  document.getElementById(name).style.display = "block"
  document.getElementById(name).style.animation = "showContent 0.5s"

  evt.currentTarget.className += " active"
}
