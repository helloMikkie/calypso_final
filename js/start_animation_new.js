	


var path0 = anime.path('#path-0');
var path1 = anime.path('#path-1');
var path2 = anime.path('#path-2');
var path3 = anime.path('#path-3');
var path4 = anime.path('#path-4');
var path5 = anime.path('#path-5');
var path6 = anime.path('#path-6');

var one = document.querySelector('#one');
var two = document.querySelector('#two');
var three = document.querySelector('#three');
var four = document.querySelector('#four');
var five = document.querySelector('#five');
var six = document.querySelector('#six');
var seven = document.querySelector('#seven');


anime({
	targets: '#diagram',
	rotate: '1turn',
	duration: 30000,
	loop: true,
	easing: 'linear',
});

var basicTimeline = anime.timeline({
	  easing: 'easeOutExpo',
		duration: 400,
		loop: true,
		direction:'alternate',
});



basicTimeline
.add({
	targets: path1,
	opacity: 1,
})
.add({
	targets: [one,two,three,four,five,six,seven],
	translateX: path0('x'),
	translateY: path0('y'),
	scale: 3,
	direction:'alternate',

})
  .add({
    targets: [two,three,four,five,six,seven],
		translateX: path1('x'),
	 	translateY: path1('y'),
		scale: 3,
		delay: function (el, i){
			return i * 100;
	},
  })
  .add({
    targets: [three,four,five,six,seven],
		translateX: path2('x'),
	 	translateY: path2('y'),
		scale: function(el,i){
			return anime.random(2,5)},

    // easing: 'easeOutExpo'
		duration: function(el,i){
			return i * anime.random(100,800)
			},
  })
	.add({
		targets: [four,five,six,seven],
		translateX: path3('x'),
		translateY: path3('y'),
		scale: 3,
		// easing: 'easeOutExpo'
	})
	.add({
		targets: [five,six,seven],
		translateX: path4('x'),
		translateY: path4('y'),

		scale: function(el,i){
			return anime.random(3,6)},
		delay: function(el,i){
			return i * anime.random(100,800)
			},
		// easing: 'easeOutExpo',


	})
	.add({
		targets: [six,seven],
		translateX: path5('x'),
		translateY: path5('y'),
		scale: 3,
		// easing: 'easeOutExpo'
	})
	.add({
		targets: [seven],
		translateX: path6('x'),
		translateY: path6('y'),
		scale: 3,
		// easing: 'easeOutExpo'
	})
