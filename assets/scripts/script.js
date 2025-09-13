import * as controller from './modules/controller.js';
import * as navigate from './modules/navigate.js';
import * as scroll from './modules/scroll.js';
import * as signup from './modules/signup.js';
import * as theme from './modules/theme.js';

document.addEventListener('DOMContentLoaded', () => {

  controller.ready();

  navigate.ready();

  // Align the selected idea before full page load to avoid a visible jump
  scroll.ready();

  signup.ready();

  theme.ready();
  // Unhide the page only after alignment to avoid any flash of pre-aligned content
  document.body.classList.add('is-ready');
});

addEventListener('load', () => {

  controller.load();

});

addEventListener('resize', () => {

  controller.resize();

});
