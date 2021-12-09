import { getAndRenderTopTV } from './render.js';

const slideMenu = ({open, close, links, menu, className}) => {
	const burgerButton = document.querySelector(open);
	const linkButtons = document.querySelectorAll(links);
	const closeButton = document.querySelector(close);
	const nav = document.querySelector(menu);

	burgerButton.addEventListener('click', () => {
		nav.classList.add(className);
	});

	linkButtons.forEach(item => {
		item.addEventListener('click', (e) => {
      e.preventDefault();
			nav.classList.remove(className);
      console.log(e.target.dataset.list);
		});
	});

  closeButton.addEventListener('click', (e) => {
    e.preventDefault();
    nav.classList.remove(className);
  });
};

const slideMenuOptions = {
	open: '.header__burger-btn',
	close: '.navigation__close',
	links: '.navigation__link',
	menu: '.navigation',
	className: 'navigation_active',
};

export const menuInit = () => slideMenu(slideMenuOptions);
