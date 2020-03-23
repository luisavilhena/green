const $window = jQuery(window)
const greenLogoRotate = document.querySelectorAll('.green-logo-rotate')
const greenLogo = document.querySelector('.green-logo')
const $sectionHome = jQuery('#green-section-home')
const greenCarouselMobile = document.querySelector('.green-carousel-mobile')
const greenCarouselDesktop = document.querySelector('.green-carousel-desktop')
const greenSectionPicks = document.querySelector('#green-section-picks')

//active section filter
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

//smoth scroll
$(document).on('click', '.button-smoth-scroll', function (e) {
    e.preventDefault();
    $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 1000, 'linear');
});

//data results
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
      let listFilterMobile = '';
      let listFilterDesktop = '';
      data.forEach(item => {
        let itemFilterDesktop = 
        "<div class='green-image-card bg-color-white'><img src='" + item.url +  "'><h5>" +
        item.name + "</h5><div class='green-image-card__description'> <p>" + item.price + 
        "</p><div><img src='resources/icons/grey/high-sun.svg'><img src='resources/icons/grey/one-drop.svg'></div></div><a href='#green-section-contact' class='green-btn fg-green bg-hover-green buy_now_button button-smoth-scroll' href=''>buy now</a></div>"
        
        listFilterDesktop = listFilterDesktop + itemFilterDesktop;
      })

      jQuery('.green-list__body').get(0).innerHTML = listFilterDesktop;
      //contact filter
      const $newbuyNow = jQuery(".buy_now_button");
      console.log($newbuyNow)
      $newbuyNow.click(e => {
        let title = $(e.currentTarget).siblings('h5').text()
        let imgUrl = $(e.currentTarget).siblings('img').attr('src')
        let p = $(e.currentTarget).siblings('div').children('p').text()
        jQuery('.green-image-description').get(0).innerHTML =
        "<div class='green-image-description'><h2 class='green-h2'>" + title + "</h2><p class='green-text-1'>$" +
        p + "</p><img src=" +
        imgUrl + " alt=" + title + 
        "><div class='green-image-description__description'><div><img src='resources/icons/grey/high-sun.svg' alt='bastante sol'>High sunlight</div><div><img src='resources/icons/grey/one-drop.svg' alt='pouca água'>Water rarely</div><div><img src='resources/icons/grey/pet.svg'> Non-toxic for pets </div></div></div>"
      })
    });
};

//Controll for buttons in filter
$nextFilterButton.click(e => {
  if (haveSunlight === undefined){
    return
  } else if (haveWater === undefined) {
    return
  } else if (isToxit === undefined) {
    return
  } else {
    $nextFilterButton.attr('href', '#green-section-picks').addClass("button-smoth-scroll")
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
