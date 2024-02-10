import './home.js'
import './menu.js'
import './about.js'
import '../scss/index.scss'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
import {homepage} from './home.js'
import {menupage} from './menu.js'
import {aboutpage} from './about.js'

(function indexpage(){
homepage();
const home = document.getElementById('home');
const menu = document.getElementById('menu');
const about = document.getElementById('about');

home.addEventListener('click', homepage);
menu.addEventListener('click', menupage);
about.addEventListener('click', aboutpage);
})()

