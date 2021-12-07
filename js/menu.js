const slideMenu = ({open, close, menu, className}) => {
	const burgerButton = document.querySelector(open);
	const closeButtons = document.querySelectorAll(close);
	const nav = document.querySelector(menu);
	console.log(burgerButton);

	burgerButton.addEventListener('click', () => {
		nav.classList.add(className);
	});

	closeButtons.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove(className);
		});
	});
}

export default slideMenu;