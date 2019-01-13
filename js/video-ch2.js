const video = document.getElementById("myVideo")
const overlayTag = document.querySelector('div.video-overlay')


const heroContainerTag = document.querySelector('hero-container')

let rate = 1
let int = 0.05
let inc

function incSpeed(speedup){
  if(speedup){
    rate = rate + int
  }else{
    rate = rate - int
  }
  video.playbackRate = rate

  if(rate <= 0.2){
    clearInterval(inc)
    rate = 0.2;
    video.pause();
  }else if(rate >= 1){
    clearInterval(inc)
    rate = 1;
  }
}

function stopInc(){
  if(rate <= 0.2){
    clearInterval(inc);
  }
}

function videoSpeed(speedup){
  inc = setInterval(function(){
    incSpeed(speedup) }, 50);
}

let videoPlaying = true


document.addEventListener('scroll', function(){
  const pixels = window.pageYOffset



  if(pixels < 300){

    if(!videoPlaying){
      video.play()
      videoSpeed(true);
      videoPlaying = true;
    }
    overlayTag.classList.remove('color-ch2')
    video.classList.remove('filter')


  } else if (pixels >= 500) {
    if (videoPlaying){
      videoSpeed(false);
      videoPlaying = false;
    }
    overlayTag.classList.add('color-ch2')
    video.classList.add('filter')

  }
}) // scroll
