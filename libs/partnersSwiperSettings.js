const partnersMobileSwiper = new Swiper('.partners-mobile-swiper', {
	direction: 'horizontal',
	loop: true,
	slidesPerView: 1,
	spaceBetween: 16,
	speed: 300,

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

const partnersDesktopSwiper = new Swiper('.partners-desktop-swiper', {
	direction: 'horizontal',
	loop: false,
	slidesPerView: 6,
	spaceBetween: 24,
	speed: 300,

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
