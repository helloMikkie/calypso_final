const zielTabs = document.querySelectorAll('.scrollIkon')
console.log(zielTabs)

zielTabs.forEach(link =>{
link.addEventListener('click', (event) =>{

  event.preventDefault()

  const href = link.getAttribute('href')
  document.querySelector(href).scrollIntoView(
    { behavior: "smooth"}
  )
})

})
