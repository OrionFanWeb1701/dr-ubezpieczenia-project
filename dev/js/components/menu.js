const navigation = () => {
	const header = document.querySelector('.header');
	const burgerIcon = document.querySelector('.header__burger-box');
	const menuList = document.querySelector('.header__content');
	const menuItems = document.querySelectorAll('.menu-item');
	const btnMenu = document.querySelector('.btn-menu');
	const stickyPhone = document.querySelector('.sticky-phone');
	const html = document.querySelector('html');

	const changeStyleMenu = () => {
		menuList.classList.toggle('active-menu');

		if (burgerIcon.firstElementChild.getAttribute('src') === './dev/img/burger-menu.svg') {
			burgerIcon.firstElementChild.setAttribute('src', './dev/img/close.svg');
			stickyPhone.style.display = 'none';
		} else if (burgerIcon.firstElementChild.getAttribute('src') === './dev/img/close.svg') {
			burgerIcon.firstElementChild.setAttribute('src', './dev/img/burger-menu.svg');
			stickyPhone.style.display = 'block';
		}
	};

	if (screen.width < 1366) {
		burgerIcon.addEventListener('click', changeStyleMenu);
		menuItems.forEach((item) => {
			item.addEventListener('click', changeStyleMenu);
		});
		btnMenu.addEventListener('click', changeStyleMenu);
	} else if (screen.width >= 1366) {
		burgerIcon.removeEventListener;
		menuItems.removeEventListener;
		btnMenu.removeEventListener;
	}

	window.addEventListener('scroll', () => {
		if (window.scrollY >= 48) {
			header.classList.add('header--sticky');
		} else {
			header.classList.remove('header--sticky');
		}
	});
};

navigation();
