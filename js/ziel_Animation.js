var path = document.querySelector('path');
	var length = path.getTotalLength();

	//console.log(length);

	// Clear  previous transition
	//path.style.transition = path.style.WebkitTransition = 'none';

	// set up Start Tarnsitions
//	path.style.strokeDasharray = 1 + ' ' + 12;
	//path.style.strokeDashoffset = 0;


	anime({
	  targets: 'path',

	  strokeDashoffset: function(el) {
		var pathLength = el.getTotalLength();
		el.setAttribute('stroke-dasharray', pathLength);
		return [0, pathLength];
	  },

	  // delay: function(el, i) {
		// return i * 180;
	  // },
	//rotate:"2",
	  duration: 6000,
	  easing: 'easeOutExpo',
	 loop: true,
	 direction: 'alternate'
	});
