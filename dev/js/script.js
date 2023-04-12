/* Script loader */

const loadElement = () => {
	const sectionHeading = document.querySelector('.section-heading');
	const sections = document.querySelectorAll('section');
	const footer = document.querySelector('.footer');

	const loader = document.querySelector('.loader');

	document.addEventListener('DOMContentLoaded', () => {
		loader.style.display = 'none';

		sectionHeading.style.display = 'block';

		sections.forEach((section) => {
			section.style.display = 'block';
		});

		footer.style.display = 'block';
	});
};

loadElement();
