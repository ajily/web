const btn = document.querySelector(".menu-btn");
const menu = document.querySelector('.menu');
const content = document.querySelector('.content');

btn.addEventListener("click", function(e) {
    menu.classList.toggle("menu_active");
    content.classList.toggle("content_active");
})

document.addEventListener("DOMContentLoaded", function () {
    let links = document.querySelectorAll("nav.menu-list a")
    let path = window.location.pathname;
    let currentElement = path.split('/').pop();
    
    for (let i = 0; i < links.length; ++i) {
        const link = links[i].href.split('/').pop();
        if (link === currentElement) {
            links[i].classList.add("menu-item_active");
        } else {
            links[i].classList.remove("menu-item_active")
        }
    }
})
