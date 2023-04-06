const swiper = new Swiper('.swiper', {
	direction: 'horizontal',
	loop: false,
	slidesPerView: 1,
	spaceBetween: 438,
	speed: 1000,

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
