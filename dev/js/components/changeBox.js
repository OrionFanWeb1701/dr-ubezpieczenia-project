/* Script of change box */

const switchBox = () => {
	const btnsChange = document.querySelectorAll('.btn-change');
	const changeBox = document.querySelectorAll('.offers-change-box__content');

	btnsChange.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			btnsChange.forEach((btn) => {
				btn.classList.remove('active');
				e.target.classList.add('active');
			});

			changeBox.forEach((box) => {
				box.classList.remove('open');
			});

			if (e.target.textContent.includes('Dla Ciebie')) {
				changeBox[0].classList.add('open');
			} else if (e.target.textContent.includes('Dla rodziny')) {
				changeBox[1].classList.add('open');
			} else if (e.target.textContent.includes('Dla firmy')) {
				changeBox[2].classList.add('open');
			}
		});
	});
};

switchBox();
