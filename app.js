const menu = document.querySelector('.menu');
const nav = document.querySelector('.window-nav');

menu.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    nav.classList.toggle('nav');
})