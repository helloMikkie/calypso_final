
var path = anime.path('#path-circle');

anime({
    targets: '#ballBlue',
    translateX: path,
    translateY: path,
    duration: 4000,
		delay: function(el,i){
			return i * 600;
			},
    loop: true,
    scale: function(el,i){
      return i * 1.2;
    },
    opacity: function(el,i){
      return i * 1.5;
    },
    easing: 'linear',
    direction: 'alternate'
  });


  //
  // anime ({
  // 			targets: 'path',
  // 			strokeDashoffset: function(el){
  // 			var pathLength = el.getTotalLength();
  // 			el.setAttribute('stroke-dasharray', pathLength);
  // 			return[-pathLength,0];
  // 			},
  // 		//zeitliche verögerung
  // 			delay: function(el,i){
  // 				return i*2000;
  // 			},
  //       duration: function(el, i, l) {
  //         return 1000 + (i * 1000);
  //       },
  // 			// duration: 800,
  // 			loop: true,
  // 			easing: 'linear',
  // 			direction: 'alternate'
  // 	});
