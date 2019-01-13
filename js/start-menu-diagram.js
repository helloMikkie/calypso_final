
const hide = function(el){
  el.style.opacity = "0.4"
}

const show = function(el){
  el.style.opacity = "1"
}

const filterTags = document.querySelectorAll('.menu-diagram .item')
const products = document.querySelectorAll('.product')
const combinations = document.querySelectorAll('.menu-diagram .combination')
const wrapperTag = document.querySelector('.wrapper-diagram')
const chapterTitle = document.querySelector('.chapter-intro h1')
const chapterText = document.querySelector('.chapter-intro p')


const chapters = [
  {title: "kooperieren",
  copy: "Dieses Miteinander gilt es am Anfang des Projekts aufzubauen. Dafür ist es sinnvoll, sich zunächst über die eigenen Erwartungen und Ziele klarzuwerden. Unser Gesprächsleitfaden hilft dann beim ersten Planungstreffen.",
  image: "images/start/diagram-ch1.jpg",
  color: "#58B0E2",
},
  {title: "interessieren",
  copy:"Viele Schüler*innen verbinden mit zeitgenössischem Tanz nur wenig oder oft sogar gar nichts. Wie können wir diese Kinder und Jugendlichen gerade zu Beginn eines Projekts für den Tanz begeistern?",
  image: "images/start/diagram-ch2.jpg",
  color: "#4CC8B2",
},
  {title: "kennenlernen",
  copy:"Gerade in der Anfangsphase eines Projektes ist es wichtig sich Zeit zu nehmen, um sich gegenseitig kennenzulernen. ",
  image:"images/start/diagram-ch3.jpg",
  color: "#A0B354",
},
  {title: "thematisieren",
  copy:"Wie vermitteln wir zeitgenössischen Tanz an Schulen? Was genau wollen wir den Kindern und Jugendlichen beibringen? Im Gegensatz zu anderen Schulfächern sind im Tanzunterricht die individuellen künstlerischen Gestaltungsmöglichkeiten freier. ",
  image: "images/start/diagram-ch4.jpg",
  color: "#f89700"
},
  {title: "reflektieren",
  copy:"Das eigene Handeln zu reflektieren und den anderen konstruktives Feedback zu geben, sind wichtige Bausteine in jedem Tanzprojekt. Beide schärfen die Wahrnehmung und stellen die Empfindungen der einzelnen Beteiligten in einen gemeinschaftlichen Rahmen",
  image: "images/start/diagram-ch5.jpg",
  color: "#FC754B"
},
  {title: "choreografieren",
  copy:"Choreografie ist die Organisation von Bewegung in Zeit und Raum. Doch was macht eine gelungene Choreografie in einem schulischen Tanzprojekt aus?",
  image: "images/start/diagram-ch6.jpg",
  color: "#C27AC8"
},
  {title: "abschließen",
   copy:"Ein Tanzprojekt geht zu Ende. Ein langer Weg mit viel Kreativität, Mühen sowie einer ganzen Bandbreite an Gefühlen liegt hinter allen Beteiligten. Diesem Prozess gilt es nun noch einmal Wertschätzung zu geben, indem wir das Projekt bewusst abschließen.",
   image: "images/start/diagram-ch7.jpg",
   color: "#8B71D6"
 }
]

let counter = 0

const goToChapter1 = function(){
  counter = 0
  showOutput()
}
const goToChapter2 = function(){
  counter = 1
  showOutput()

}
const goToChapter3 = function(){
  counter = 2
  showOutput()
}
const goToChapter4 = function(){
  counter = 3
  showOutput()
}
const goToChapter5 = function(){
  counter = 4
  showOutput()
}
const goToChapter6 = function(){
  counter = 5
  showOutput()
}
const goToChapter7 = function(){
  counter = 6
  showOutput()
}
  // hide(product)
  const showOutput = function(){
    chapterTitle.innerHTML = chapters[counter].title
    chapterTitle.style.color = chapters[counter].color
    chapterText.innerHTML = chapters[counter].copy

    wrapperTag.style.backgroundImage = 'url(' + chapters[counter].image + ')'

  }

    filterTags.forEach( filter =>{


      filter.addEventListener('click', function(){



        const myFilter = this.getAttribute('data-filter')

        if(this.classList.contains('kooperieren')){
          console.log('kooperieren')
          goToChapter1()
        }  if(this.classList.contains('interessieren')){
          console.log('interessieren')
          goToChapter2()
        }  if(this.classList.contains('kennenlernen')){
          console.log('kennenlernen')
          goToChapter3()
        }  if(this.classList.contains('thematisieren')){
          console.log('thematisieren')
          goToChapter4()
        }  if(this.classList.contains('reflektieren')){
          console.log('reflektieren')
          goToChapter5()
        }  if(this.classList.contains('choreografieren')){
          console.log('choreografieren')
          goToChapter6()
        }  if (this.classList.contains('abschliessen')){
          console.log('abschliessen')
          goToChapter7()
        }


           products.forEach(product =>{

              if(product.classList.contains(myFilter)){
                  show(product)

              } else {
                hide(product)
              }
            }) // end products loop

          combinations.forEach(combination =>{
            if(combination.classList.contains(myFilter)){

              combination.style.fill = "white"
              combination.style.fillOpacity = 0.4
            } else{
              combination.style.fillOpacity = 0.1

            }
          }) // end comb loop

          filterTags.forEach(filter =>{
            filter.classList.remove('active-filter')
            filter.style.animation = "pulse"



          })

          this.classList.add('active-filter')
          this.style.animation = ""



        }) // end event

    }) // end filter Loop
