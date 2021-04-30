$(document).ready(function () {

    $('.menu-wrap .toggler').click(function () {
        $('.logo_text a').toggleClass('dark light');       
        $('.mymenu').toggleClass('show closed');        
        $('.mymenu_list').toggleClass('dsp-bl');
        $('li').toggleClass('menu-open');        
        $('.details').toggleClass('block');        
    });
});

// Mouse Circle ans square
// http://ahrengot.com/tutorials/greensock-javascript-animation

var $circle = $('.circle');
var $square = $('.square');

function moveCircle(e) {
	TweenLite.to($circle, 0.6, {
    css: {
      left: e.pageX,
      top: e.pageY
    }
  });
  
	TweenLite.to($square, 0.6, {
    css: {
      left: e.pageX-4,
      top: e.pageY-9
    }
  });
}


$(window).on('mousemove', moveCircle);


//page refresh on Back button on browser
window.addEventListener( 'pageshow', function ( event ) {
  var historyTraversal = event.persisted || 
                         ( typeof window.performance != 'undefined' && 
                              window.performance.navigation.type === 2 );
  if ( historyTraversal ) {
    // Handle page restore.
    window.location.reload();
  }
});



// div 3d folow mouse
const img = document.getElementsByTagName('#showcase-id')[0];

function sway(xPos, yPos) {
  let wh = window.innerHeight / 2,
  ww = window.innerWidth / 2;
  document.body.style.setProperty('--mouseX', (xPos - ww) / 25+"deg");
  document.body.style.setProperty('--mouseY', (yPos - wh) / 25+"deg");
}

document.addEventListener("mousemove", function(e) {
  sway(e.clientX,e.clientY);
})

document.addEventListener("touchmove", function(e) {
    e.preventDefault();
    var touch = e.targetTouches[0];
    if (touch) {
        sway(touch.pageX, touch.pageY);
    }
});


// add video to background
// Get the video
var video = document.getElementById("myVideo");


//grained background
// var options = {
//   "animate": true,
//   "patternWidth": 100,
//   "patternHeight": 100,
//   "grainOpacity": 0.05,
//   "grainDensity": 1,
//   "grainWidth": 1,
//   "grainHeight": 1
// }
// grained(".sandy-video_bg", options);


