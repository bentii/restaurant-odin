import './home.js'
import './menu.js'
import './about.js'
import '../scss/index.scss'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min'

const container = document.getElementById('container');
const newElement = document.createElement('p');
newElement.textContent = 'nat tem um rabinho seco';
container.appendChild(newElement);