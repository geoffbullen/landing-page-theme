$(document).ready(function() {
var html5video = !!document.createElement('video').canPlayType;

if(!html5video){

	///$('.hero-section .embed-responsive').css('display','none');
	//$('.hero-section .embed-responsive').css('display','block');
		

	$('.hero-section video').css('background-image','url(assets/img/mobile-image.png)');
}

$('#video1').on('loadstart', function (event) {
  //$(this).addClass('background');
  $('.hero-section video').css('background-image','url(assets/img/mobile-preload.png)');
});

$('#video1').on('canplay', function (event) {
  //$(this).removeClass('background');
  $('.hero-section video').css('background-image','url(assets/img/mobile-frame.png)');
});


});

