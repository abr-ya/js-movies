import { getAndRenderCards } from './render.js';

const slideMenu = ({open, close, links, menu, menues, className}) => {
	const burgerButton = document.querySelector(open);
	const linkButtons = document.querySelectorAll(links);
	const closeButton = document.querySelector(close);
	const topNav = document.querySelector(menu);
	const bothNavs = document.querySelectorAll(menues);
  console.log(topNav);

	burgerButton.addEventListener('click', () => {
		topNav.classList.add(className);
	});

	linkButtons.forEach(item => {
		item.addEventListener('click', () => {
      topNav.classList.remove(className);
		});
	});

  closeButton.addEventListener('click', (e) => {
    e.preventDefault();
    topNav.classList.remove(className);
  });

  bothNavs.forEach(nav => {
    nav.addEventListener('click', (e) => {
      const target = e.target.closest('.get-nav__link');

      if (target) {
        e.preventDefault();
        const key = e.target.dataset.list
        console.log('to render:', key);
        getAndRenderCards(key);
      }
		});
  });
};

const slideMenuOptions = {
	open: '.header__burger-btn',
	close: '.navigation__close',
	links: '.navigation__link',
	menu: '.navigation',
  menues: '.get-nav',
	className: 'navigation_active',
};

export const menuInit = () => slideMenu(slideMenuOptions);
