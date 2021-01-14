//import html
//import './index.html'

import './body/body.scss';
import './body/illustrations.scss';
import './body/animationSvg.scss';
import './body/background.js';
import './components/menu/menu.scss';
import './components/menu/menu.js';
import './components/hamburgerMenu/hamburgerMenu.scss';
import './components/hamburgerMenu/hamburgerMenu.js';
import './components/button/button.scss';
import './components/button/button.js';
import './components/darkMode/darkMode.scss';
import './components/darkMode/darkMode.js';
import './components/project/project.scss';
import './components/project/project.js';
import './components/aid/aid.scss';
import './components/aid/aid.js';
import './components/footer/footer.scss';
import './components/footer/footer.js';
import './components/association/association.scss';









//import image
import './img/logo.png';
import './img/background-mobile-small.svg';
import './img/background-mobile.svg';
import './img/background-middle.svg';
import './img/background-desktop.svg';
import './img/background-desktop-large.svg';
import './img/test1.jpg';
import './img/test2.jpg';
import './img/test3.jpg';
import './img/test4.jpg';
import './img/test5.jpg';
import './img/pit-op.jpg';
import './img/iconmonstr-tablet-5.svg';
import './img/iconmonstr-email-2.svg';
import './img/iconmonstr-facebook-6.svg';
import './img/iconmonstr-facebook-messenger-1.svg';


//import scss
//import './body/body.scss';
//import './body/illustrations.scss';
//import './components/menu/menu.scss';
//import './components/hamburgerMenu/hamburgerMenu.scss';
//import './components/button/button.scss';
//import './components/darkMode/darkMode.scss';
//import './components/project/project.scss';
//import './components/aid/aid.scss';
//import './components/association/association.scss';
//
////import js
//import './components/menu/menu.js';
//import './components/hamburgerMenu/hamburgerMenu.js';
//import './components/button/button.js';
//import './components/darkMode/darkMode.js';
//import './components/project/project.js';
//import './components/aid/aid.js';

//import php
import './php/lastProjects.php';

//import functions and vars
import {addPositionProject} from './components/project/project.js';


//Others code to index.html
let currentYear = new Date().getFullYear();
let copyright = `&copy; Copyright ${currentYear}, Antek Kois & Nikodem Kusiak. All rights reserved`;
document.querySelector('.copyright').innerHTML = copyright;