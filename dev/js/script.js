/* Script loader */

window.addEventListener('load', () => {
	const loader = document.querySelector('.loader');
	const header = document.querySelector('.header');
	const sections = document.querySelectorAll('section');
	const footer = document.querySelector('.footer');

	loader.classList.add('hiddenElement');

	header.classList.remove('hiddenElement');

	sections.forEach((section) => {
		section.classList.remove('hiddenElement');
	});

	footer.classList.remove('hiddenElement');
});
