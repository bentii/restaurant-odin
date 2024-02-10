import selfservice from '../img/selfservice.jpg';
import delivery from '../img/delivery.jpg';

function homepage(){
const container = document.getElementById('container');
const newDiv1 = document.createElement('div');
const newDiv2 = document.createElement('div');
const newDiv3 = document.createElement('div');
const newDiv4 = document.createElement('div');



container.innerHTML = '';
container.classList.remove('flex-row', 'flex-wrap');
container.classList.add('flex-column');
newDiv1.classList.add('d-flex', 'justify-content-center', 'text-center');
container.appendChild(newDiv1);
newDiv2.classList.add('p-2', 'border-bottom');
newDiv2.innerHTML = '<p>Welcome to Restaurant<p> <p>We offer two types of services<p>';
newDiv1.appendChild(newDiv2);

newDiv3.classList.add('border-bottom', 'p-2', 'd-flex','flex-column', 'justify-content-center','align-items-center');
newDiv3.innerHTML = `<p>Self-Service</p><img src='${selfservice}'/><p>You came to us and eat as much as you like for a fixed price</p>`;
container.appendChild(newDiv3);
newDiv4.classList.add('border-bottom', 'p-2', 'd-flex','flex-column', 'justify-content-center','align-items-center');
newDiv4.innerHTML = `<p>Deliveryy</p><img src='${delivery}'/><p>We go to you with our super hot boxed dishes</p>`;
container.appendChild(newDiv4);

const imgs = document.querySelectorAll('img');
imgs.forEach(img => img.addEventListener('click', function(){}));
}

export {homepage};