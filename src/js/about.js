import location from '../img/location.png';

function aboutpage(){
    const container = document.getElementById('container');
    const newDiv1 = document.createElement('div');
    const newDiv2 = document.createElement('div');
    const newDiv3 = document.createElement('div');
   
    container.innerHTML = '';
    container.classList.remove('flex-row', 'flex-wrap');
    container.classList.add('flex-column');
    newDiv1.classList.add('d-flex', 'justify-content-center', 'text-center');
    container.appendChild(newDiv1);
    newDiv2.classList.add('p-2', 'border-bottom');
    newDiv2.innerHTML = '<p>Open Thu - Sun<p><p>5:00 pm - 00:00 am<p>';
    newDiv1.appendChild(newDiv2);

    newDiv3.classList.add('p-2', 'd-flex','flex-column', 'justify-content-center','align-items-center');
    newDiv3.innerHTML = `<p>Our Location</p><img id='img-location' src='${location}'/>`;
    container.appendChild(newDiv3);
        
    const imgs = document.querySelectorAll('img');
    imgs.forEach(img => img.addEventListener('click', function(){}));
    }
    
export {aboutpage};