let navabar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => {
    navabar.classList.toggle('active');
    cartitem.classList.remove('active');
    searchForm.classList.remove('active');
}
let cartitem = document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclick = () => {
    cartitem.classList.toggle('active')
    navabar.classList.remove('active');
    searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active')
    navabar.classList.remove('active');
    cartitem.classList.remove('active');
}

window.onscroll = () => {
    navabar.classList.remove('active');
    cartitem.classList.remove('active');
    searchForm.classList.remove('active');
}

var typed = new Typed(".auto-input", {
    strings: ["IN THE morning", "AT LATE NIGHT"],
    typeSpeed: 100,
    frontSpeed: 100,
    loop: true
})