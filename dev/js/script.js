/* Script loader */

window.addEventListener('DOMContentLoaded', () => {
	const loader = document.querySelector('.loader');
	const sections = document.querySelectorAll('section');
	const footer = document.querySelector('.footer');

	loader.classList.add('hiddenElement');

	sections.forEach((section) => {
		section.classList.remove('hiddenElement');
	});

	footer.classList.remove('hiddenElement');
});
