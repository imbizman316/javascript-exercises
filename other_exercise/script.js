const container = document.querySelector('#container');

console.dir(container.firstElementChild);

const controls = document.querySelector('.controls');

console.dir(controls.previousElementSibling);

const div = document.createElement('div');

div.style.color = 'blue';
div.style.cssText = 'color: blue; background: white;';
div.setAttribute('style', 'color: blue; background: white;');

div.setAttribute('id', 'theDiv');
div.getAttribute('id');
div.removeAttribute('id');

div.classList.add('new');
div.classList.remove('new');
div.classList.toggle('active');

div.innerHTML = '<span>Hello World!</span>';

div.classList.add('content');
div.textContent = 'This is the gloriuos text-content!';

container.appendChild(div);

const im_red = document.createElement('p');
im_red.style.color = 'red';
im_red.textContent = "Hey I'm red!";
container.appendChild(im_red);

const blue = document.createElement('h3');
blue.style.color = 'blue';
blue.innerText = "I'm a blue he3!";
container.appendChild(blue);

const blackborder = document.createElement('div');
blackborder.style.border = 'black solid 1px';
blackborder.style.backgroundColor = 'pink';
container.appendChild(blackborder);

const imadiv = document.createElement('h1');
imadiv.textContent = "I'm in a div";
blackborder.appendChild(imadiv);

const metoo = document.createElement('p');
metoo.textContent = "ME TOO!";
blackborder.appendChild(metoo);

const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

const clicktoo = document.querySelector("#btns");
clicktoo.addEventListener('click', (e) => {
    e.target.style.background = 'blue';
    e.target.style.color = 'white';
    alert("hellow world");
})

function alertFunction() {
    alert("YAY, YOU DID IT!");
}


const buttons = document.querySelectorAll('#bunchofbuttons');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    })
})















