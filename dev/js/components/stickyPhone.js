const stickyPanel = () => {
	const stickyPhone = document.querySelector('.sticky-phone');

	window.addEventListener('scroll', () => {
		if (window.scrollY >= 641) {
			stickyPhone.classList.remove('hidden-phone');
			stickyPhone.classList.add('show-phone');
		} else {
			stickyPhone.classList.remove('show-phone');
			stickyPhone.classList.add('hidden-phone');
		}
	});
};

stickyPanel();
