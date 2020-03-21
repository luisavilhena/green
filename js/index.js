const $window = jQuery(window)
const greenLogoRotate = document.querySelectorAll('.green-logo-rotate')
const greenLogo = document.querySelector('.green-logo')
const $sectionHome = jQuery('#green-section-home')
const greenCarouselMobile = document.querySelector('.green-carousel-mobile')
const greenCarouselDesktop = document.querySelector('.green-carousel-desktop')

$('.carousel').carousel()

$('.carousel').on('slid', '', function() {
  var $this = $(this);

  $this.children('.carousel-control').show();

  if($('.carousel-item:first').hasClass('active')) {
  	console.log('ó')
    $this.children('.left.carousel-control').hide();
  } else if($('.carousel-item:last').hasClass('active')) {
    $this.children('.right.carousel-control').hide();
  }

});

console.log(greenLogoRotate)

const controlResponsive =  () => {
	if ($window.width() < 708) {

		greenCarouselMobile.style.display = ('block');
		greenCarouselDesktop.style.display = ('none');

		greenLogoRotate.forEach((item) => {
			item.style.opacity = "0";
		})
	} else {
		greenCarouselMobile.style.display = ('none');
		greenCarouselDesktop.style.display = ('flex');
		greenLogoRotate.forEach((item) => {
			item.style.opacity = "1";
		})
	}
}

const controlScroll = () => {
	if($window.width() > 708) {

		if($window.scrollTop() > $sectionHome.height()) {
			greenLogo.style.opacity = ('0');
		} else {
			greenLogo.style.opacity = ('1');
		}
	} else {
		greenLogo.style.opacity =('1');
	}
}

window.addEventListener('resize', controlResponsive.bind(this))

window.addEventListener('scroll', controlScroll.bind(this))

controlResponsive();
controlScroll();

// greenLogoRotate.forEach((item) => {
// 	if ($window.width() < 708) {
// 		item.style.opacity = '0';
// 	} else {
// 		item.style.opacity = '1';
// 	}
// })

