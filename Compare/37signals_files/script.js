import * as controller from './modules/controller.js';
import * as navigate from './modules/navigate.js';
import * as scroll from './modules/scroll.js';
import * as signup from './modules/signup.js';
import * as theme from './modules/theme.js';

document.addEventListener('DOMContentLoaded', () => {

  controller.ready();

  navigate.ready();

  signup.ready();

  theme.ready();

});

addEventListener('load', () => {

  controller.load();

  scroll.load();

});

addEventListener('resize', () => {

  controller.resize();

});
