const $window = jQuery(window)
const greenLogoRotate = document.querySelectorAll('.green-logo-rotate')
const greenLogo = document.querySelector('.green-logo')
const $sectionHome = jQuery('#green-section-home')
const greenCarouselMobile = document.querySelector('.green-carousel-mobile')
const greenCarouselDesktop = document.querySelector('.green-carousel-desktop')

// Crio uma variavel para salvar a resposta da primeira pergunta
let haveSunlight = undefined;
let haveWater = undefined;
let havePets = undefined;
// pego todas as respostas da primeira pergunta, e adiciono um evento de clique nelas
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
});

$sunlightAnswerLow.click(e => {
  haveSunlight = "low";
});

$sunlightAnswerNo.click(e => {
	haveSunlight = "no";
});

$waterAnswerRarely.click(e => {
  haveWater = "rarely";
})

$waterAnswerRegularly.click(e => {
  haveWater = "regularly";
})

$waterAnswerDaily.click(e => {
  haveWater = "Daily";
})

$petsAnswerFalse.click(e => {
  havePets = false;
})

$petsAnswerTrue.click(e => {
  havePets = true;
})

$nextFilterButton.click(e => {
  if (haveSunlight === undefined){
    return
  } else if (haveWater === undefined) {
    return
  } else if (havePets === undefined) {
    return
  } else {
    $nextFilterButton.attr('href', '#green-section-picks')
  }
})

$buyNow.click(e => {
  $buyNow.attr('href', 'green-section-contact')
})


// Quando clicarmos na ultima seta do carousel, ai sim devemos mostrar os resultas e chamar uma funcao para pegar o JSON do backend:

// Olhe para o email de novo, e preste atenção como o backend espera a resposta:
//Parâmetros e valores aceitos

//sun :high , low ou no
//water: daily , regularly ou rarely
//pets: false ou true

// EXEPLO DE CHAMADA (olha bem para o final da chamada, como tem as variaveis que vamos enviar): https://6nrr6n9l50.execute-api.us-east-1.amazonaws.com/default/front-plantTest-service?sun=high&water=rarely&pets=false
const pegarResultados = () => {
	const escolhasUsuario =
    "sun=" + haveSunlight + "&water=" + havePets + "&pets" + havePets;
}


$('.carousel').carousel()

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

// greenLogoRotate.forEach((item) => {
// 	if ($window.width() < 708) {
// 		item.style.opacity = '0';
// 	} else {
// 		item.style.opacity = '1';
// 	}
// })

