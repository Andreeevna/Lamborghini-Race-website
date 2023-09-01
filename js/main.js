const swiper = new Swiper('.swiper', {
	// Optional parameters
	loop: true,
	slidesPerView: 2,
	spaceBetween: 20,

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-right',
		prevEl: ' .swiper-button-left',
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
	},
})

const menuBtn = document.querySelector('.menu-btn')
const menuMob = document.querySelector('.menu-mobile')
menuBtn.addEventListener('click', () => {
	menuMob.classList.toggle('menu--open')
})
