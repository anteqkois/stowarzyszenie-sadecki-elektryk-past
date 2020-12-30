
//import js
import './components/menu/menu.js';
import './components/hamburgerMenu/hamburgerMenu.js';
import './components/button/button.js';
import './components/darkMode/darkMode.js';
import './components/project/project.js';

//import php
import './php/allProjects.php';

//import functions and vars
import {addPositionProject} from './components/project/project.js';


//Others code to projects.html
const xhr = new XMLHttpRequest();
const projects = document.querySelector('.projects-wrapper');

xhr.onload = function(){
    if (this.status === 200){
        projects.innerHTML += xhr.responseText;
        addPositionProject();

    } else {
        console.warn('Did not recive 200 OK from response');
    }
};

xhr.open('get', './php/allProjects.php');
xhr.send();

console.log('hello')
console.log('hello')
console.log('hello')
console.log('hello')
console.log('hello')
console.log('hello')