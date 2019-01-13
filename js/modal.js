// Vorab-Version

// const buttonTag = document.querySelector('button.open-modal')
// const modalTag = document.querySelector('div.modal')
// const backgroundTag = document.querySelector('.modal div.modal-background')
// const closeTag = document.querySelector('.modal div.modal-close')
// const modalContainerTag = document.querySelector('.modal-container')
//
//
// buttonTag.addEventListener('click', function(){
//   modalTag.classList.add('show')
//   modalTag.style.animation = "fade 0.3s"
//   backgroundTag.style.animation = "fade 0.5s"
//
// })
//
// closeTag.addEventListener('click', function(){
//   modalTag.classList.remove('show')
//   backgroundTag.style.animation = ""
// })
//
// modalContainerTag.addEventListener('scroll', function(event){
//   event.preventDefault()
// })




function openModal(evt, name){
  const modalContents = document.querySelectorAll('div.modal')
  const tablinks = document.getElementsByClassName("open-modal")

  const backgroundTag = document.querySelector('.modal div.modal-background')
  const closeTags = document.querySelectorAll('.modal div.modal-close, div.modal-close-white')

  modalContents.forEach(content =>{
    content.style.display = "none"

    closeTags.forEach(tag =>{
      tag.addEventListener('click', function(){
        content.style.display = "none"
        backgroundTag.style.animation = ""
      })
    })
  })

  for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" show", "");
    }

  document.getElementById(name).style.display = "block"
  document.getElementById(name).style.animation = "fade 0.3s"
  evt.currentTarget.className += " show"
}
