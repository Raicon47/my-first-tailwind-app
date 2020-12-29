const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
/*
or
const menu = document.querySelector('#menu');
const menu = document.querySelector('#menu');
*/

burger.addEventListener('click', () => {
    if(menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
})