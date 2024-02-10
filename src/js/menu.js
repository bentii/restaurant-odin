import food from '../img/food.png';

function menupage(){
const container = document.getElementById('container');
const newDiv1 = document.createElement('div');
const newDiv2 = document.createElement('div');
const newDiv3 = document.createElement('div');
const newDiv4 = document.createElement('div');
const newDiv5 = document.createElement('div');
const newDiv6 = document.createElement('div');

container.innerHTML = '';
container.classList.remove('flex-column');
container.classList.add('flex-row', 'flex-wrap');

newDiv1.classList.add('border-bottom', 'p-2','align-items-center', 'p-5');
newDiv1.innerHTML = `<img src='${food}'/><p>The all in one burguer</p>`;
container.appendChild(newDiv1);

newDiv2.classList.add('border-bottom', 'p-2','align-items-center', 'p-5');
newDiv2.innerHTML = `<img src='${food}'/><p>The all in one burguer</p>`;
container.appendChild(newDiv2);

newDiv3.classList.add('border-bottom', 'p-2','align-items-center', 'p-5');
newDiv3.innerHTML = `<img src='${food}'/><p>The all in one burguer</p>`;
container.appendChild(newDiv3);

newDiv4.classList.add('border-bottom', 'p-2','align-items-center', 'p-5');
newDiv4.innerHTML = `<img src='${food}'/><p>The all in one burguer</p>`;
container.appendChild(newDiv4);

newDiv5.classList.add('border-bottom', 'p-2','align-items-center', 'p-5');
newDiv5.innerHTML = `<img src='${food}'/><p>The all in one burguer</p>`;
container.appendChild(newDiv5);

newDiv6.classList.add('border-bottom', 'p-2','align-items-center', 'p-5');
newDiv6.innerHTML = `<img src='${food}'/><p>The all in one burguer</p>`;
container.appendChild(newDiv6);
}

export {menupage};