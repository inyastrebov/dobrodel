const body = document.body;


const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView ({
            behavior: "smooth",
            block: "start"
        })
    })
}



window.addEventListener('scroll', function(){
    let scroll = document.querySelector('.scroll-top')
    scroll.classList.toggle("scroll-top__active", window.scrollY>500)
})



const openBtn = document.querySelectorAll('button[name="btn"]')
const closeBtn = document.querySelector('.registration__close');
const popupRegistr = document.querySelector('.modal-section')

for (let open of openBtn) {
    open.addEventListener("click", () => {
        popupRegistr.classList.add('open')
        body.classList.add('noscroll');
    })
};

closeBtn.addEventListener("click", () => {
    popupRegistr.classList.remove('open')
    body.classList.remove('noscroll');
});



const openBurger = document.querySelector('#hamb');
const closeBurger = document.querySelector('.burger-menu__close')
const linkBurger = document.querySelectorAll('.burger-menu__link')
const burgerMenu = document.querySelector('.burger-menu');

openBurger.addEventListener("click", () => {
    burgerMenu.classList.add('open-burger');
    body.classList.add('noscroll');
})

closeBurger.addEventListener("click", () => {
    burgerMenu.classList.remove('open-burger');
    body.classList.remove('noscroll');
})

for (let link of linkBurger) {
    link.addEventListener("click", () => {
        burgerMenu.classList.remove('open-burger');
        body.classList.remove('noscroll');
    })
}
