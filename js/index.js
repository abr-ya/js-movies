import slideMenu from './menu.js';
import { getAndRenderTop } from './render.js';

const slideMenuOptions = {
	open: '.header__burger-btn',
	close: '.navigation__link, .navigation__close',
	menu: '.navigation',
	className: 'navigation_active',
};
slideMenu(slideMenuOptions);
getAndRenderTop();
