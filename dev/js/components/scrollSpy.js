const scrollSpy = () => {
	const scrollSpySections = document.querySelectorAll('section');
	const menuLinks = document.querySelectorAll('.menu-item a');

	const handleScrollSpy = () => {
		const sections = [];

		const toggleActiveLink = () => {
			const activeSection = document.querySelector(`[href*="${sections[0].id}"]`);

			menuLinks.forEach((item) => item.classList.remove('active-section'));

			activeSection.classList.add('active-section');
		};

		scrollSpySections.forEach((section) => {
			if (screen.width < 1366) {
				if (window.scrollY <= section.offsetTop + section.offsetHeight - 66) {
					sections.push(section);

					toggleActiveLink();
				}
			} else if (screen.width >= 1366) {
				if (window.scrollY <= section.offsetTop + section.offsetHeight - 106) {
					sections.push(section);

					toggleActiveLink();
				}
			}
		});
	};

	window.addEventListener('scroll', handleScrollSpy);
};

scrollSpy();
