const stickyPanel = () => {
	const stickyPhone = document.querySelector('.sticky-phone');
	const sectionHeading = document.querySelector('.section-heading');

	const animationStickyPanel = () => {
		if (window.scrollY >= sectionHeading.offsetHeight - 64) {
			stickyPhone.classList.remove('hidden-phone');
			stickyPhone.classList.add('show-phone');
		} else {
			stickyPhone.classList.remove('show-phone');
			stickyPhone.classList.add('hidden-phone');
		}
	};

	window.addEventListener('scroll', animationStickyPanel);
};

stickyPanel();
