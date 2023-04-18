const stickyPanel = () => {
	const stickyPhone = document.querySelector('.sticky-phone');
	const sections = document.querySelectorAll('section');
	const footer = document.querySelector('.footer');

	const animationStickyPanel = () => {
		// if (window.scrollY >= sections[0].offsetHeight - 64) {
		// 	stickyPhone.classList.remove('hidden-phone');
		// 	stickyPhone.classList.add('show-phone');
		// } else if (
		// 	window.scrollY >= document.body.offsetHeight - (sections[7].offsetHeight + footer.offsetHeight) - 64 ||
		// 	window.scrollY <= sections[0].offsetHeight - 64
		// ) {
		// 	stickyPhone.classList.remove('show-phone');
		// 	stickyPhone.classList.add('hidden-phone');
		// }
	};

	window.addEventListener('scroll', animationStickyPanel);
};

stickyPanel();
