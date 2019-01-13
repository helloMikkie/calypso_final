const images = [
  'images/reisekarten/1-1.png','images/reisekarten/1-2.png','images/reisekarten/1-3.png','images/reisekarten/1-4.png','images/reisekarten/2-1.png','images/reisekarten/2-2.png','images/reisekarten/2-3.png','images/reisekarten/2-4.png','images/reisekarten/3-1.png','images/reisekarten/3-2.png','images/reisekarten/3-3.png','images/reisekarten/3-4.png'
]
const canvasTag = document.querySelector('.canvas')

var counter = 0;

function placeImage(x, y) {
	console.log('Hello')
  const nextImage = images[counter]

  const img = document.createElement('img')
  img.setAttribute('src', nextImage )
  img.classList.add('draggable')
  img.style.left = `${x}px`
  img.style.top = `${y}px`

  img.style.transform = "translate(-50%,-50%) scale(0.5) rotate(" + (Math.random() * 20 - 10) + "deg)"

  canvasTag.appendChild(img)
  counter = counter + 1
  if(counter > images.length -1){
    counter = 0
  }
}


canvasTag.addEventListener('click', function(event){
  event.preventDefault()

  placeImage(event.pageX, event.pageY)
})
