const $window = jQuery(window)
const greenLogoRotate = document.querySelectorAll('.green-logo-rotate')
const greenLogo = document.querySelector('.green-logo')
const $sectionHome = jQuery('#green-section-home')
const greenCarouselMobile = document.querySelector('.green-carousel-mobile')
const greenCarouselDesktop = document.querySelector('.green-carousel-desktop')
const greenSectionPicks = document.querySelector('#green-section-picks')

let haveSunlight = undefined;
let haveWater = undefined;
let isToxit = undefined;

const $sunlightAnswerHight = jQuery(".sunlight_answer_hight");
const $sunlightAnswerLow = jQuery(".sunlight_answer_low");
const $sunlightAnswerNo = jQuery(".sunlight_answer_no");
const $waterAnswerRarely = jQuery(".water_answer_rarely");
const $waterAnswerRegularly = jQuery(".water_answer_regularly");
const $waterAnswerDaily = jQuery(".water_answer_daily");
const $petsAnswerFalse = jQuery(".pets_answer_false");
const $petsAnswerTrue = jQuery(".pets_answer_true");
const $nextFilterButton = jQuery(".next_filter_button");
const $buyNow = jQuery(".buy_now_button");

$sunlightAnswerHight.click((e) => {
	haveSunlight = 'high'
    $sunlightAnswerNo.removeClass('active'),
    $sunlightAnswerLow.removeClass('active')
    $sunlightAnswerHight.toggleClass('active')
});

$sunlightAnswerLow.click(e => {
  haveSunlight = "low";
  $sunlightAnswerLow.toggleClass('active')
  $sunlightAnswerNo.removeClass('active'),
  $sunlightAnswerHight.removeClass('active')
});

$sunlightAnswerNo.click(e => {
	haveSunlight = "no";
  $sunlightAnswerNo.toggleClass('active')
  $sunlightAnswerHight.removeClass('active'),
  $sunlightAnswerLow.removeClass('active')
});

$waterAnswerRarely.click(e => {
  haveWater = "rarely";
  $waterAnswerRarely.toggleClass('active')
  $waterAnswerRegularly.removeClass('active')
  $waterAnswerDaily.removeClass('active')
})

$waterAnswerRegularly.click(e => {
  haveWater = "regularly";
  $waterAnswerRegularly.toggleClass('active')
  $waterAnswerRarely.removeClass('active')
  $waterAnswerDaily.removeClass('active')
})

$waterAnswerDaily.click(e => {
  haveWater = "Daily";
  $waterAnswerDaily.toggleClass('active')
  $waterAnswerRarely.removeClass('active')
  $waterAnswerRegularly.removeClass('active')
})

$petsAnswerFalse.click(e => {
  isToxit = true;
  $petsAnswerFalse.toggleClass('active');
  $petsAnswerTrue.removeClass('active');
})

$petsAnswerTrue.click(e => {
  isToxit = false;
  $petsAnswerTrue.toggleClass('active')
  $petsAnswerFalse.removeClass('active');
})

function renderCard(data) {
  return `
    <h1 class="bg-color-green">${data.name}</h1>
  `
}

const filterResults = () => {
  const escolhasUsuario =
    "sun=" + haveSunlight + "&water=" + haveWater + "&pets=" + isToxit;

    console.log(escolhasUsuario)

  const URL =
    "https://6nrr6n9l50.execute-api.us-east-1.amazonaws.com/default/front-plantTest-service?" +
    escolhasUsuario;

  window.fetch(URL)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      data.forEach(item => {

        // document.write(renderCard(item))
        // greenSectionPicks.appendChild('oiiiiiiiiiiiiiiiii')
        // document.querySelector("#green-section-picks").appendChild(renderCard(item))
      })
    });
};


$nextFilterButton.click(e => {
  if (haveSunlight === undefined){
    return
  } else if (haveWater === undefined) {
    return
  } else if (isToxit === undefined) {
    return
  } else {
    $nextFilterButton.attr('href', '#green-section-picks')
    filterResults();
  }
})

$buyNow.click(e => {
  $buyNow.attr('href', '#green-section-contact')
})

$('.carousel').carousel('pause')

$('.carousel').on('slid', '', function() {
  var $this = $(this);
	console.log('haveSunlight');
  $this.children('.carousel-control').show();

  if($('.carousel-item:first').hasClass('active')) {
  	console.log('ó')
    $this.children('.left.carousel-control').hide();
  } else if($('.carousel-item:last').hasClass('active')) {
    $this.children('.right.carousel-control').hide();
  }

});

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
