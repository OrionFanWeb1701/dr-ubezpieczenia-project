/* Script loader */

const loadElement = () => {
	const loader = document.querySelector('.loader');
	const sections = document.querySelectorAll('section');
	const footer = document.querySelector('.footer');

	document.addEventListener('DOMContentLoaded', () => {
		loader.classList.add('hiddenElement');

		sections.forEach((section) => {
			section.classList.remove('hiddenElement');
		});

		footer.classList.remove('hiddenElement');
	});
};

loadElement();
