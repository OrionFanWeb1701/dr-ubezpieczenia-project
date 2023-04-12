const navigation = () => {
	const header = document.querySelector('.header');
	const burgerIcon = document.querySelector('.header__burger-box');
	const menuList = document.querySelector('.header__menu');
	const menuItems = document.querySelectorAll('.menu-item');

	burgerIcon.addEventListener('click', () => {
		menuList.classList.toggle('active-menu');
	});

	menuItems.forEach((item) => {
		item.addEventListener('click', () => {
			menuList.classList.toggle('active-menu');
		});
	});

	window.addEventListener('scroll', () => {
		if (window.scrollY >= 80) {
			header.classList.add('header--sticky');
		} else {
			header.classList.remove('header--sticky');
		}
	});
};

navigation();
