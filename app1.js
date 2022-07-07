const menu = document.querySelector('.menu');
const nav = document.querySelector('.window-nav');
const switches = document.getElementById('switches');
const monthly = document.getElementById('monthly');
const yearly = document.getElementById('yearly');
const time = document.getElementsByClassName('time')
const amount = document.getElementsByClassName('amount')

const changeTime = ()=>{
    amount[0].textContent = '$45'
    amount[1].textContent = '$135'
    amount[2].textContent = '$77'
    for (let index = 0; index < time.length; index++) {
    time[index].textContent = "/yr";
}}
const reverseTime = ()=>{
    amount[0].textContent = '$4'
    amount[1].textContent = '$12'
    amount[2].textContent = '$7'
    for (let index = 0; index < time.length; index++) {
    time[index].textContent = "/mo";
}}
menu.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    nav.classList.toggle('nav');
})

switches.addEventListener('click', ()=>{
    monthly.classList.toggle('bold-price')
    yearly.classList.toggle('bold-price')
    if (yearly.className === "bold-price") {
        changeTime()
    }
    else{
        reverseTime()
    }
})