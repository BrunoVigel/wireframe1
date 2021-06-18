
var swiper = new Swiper(".swiper-header", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    stopOnLastSlide: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

setTimeout(() => {
  swiper.autoplay.stop()
}, 7000);


var swiper2 = new Swiper(".swiper-product", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});







const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

const hamburger = document.querySelector(".menu-btn");
const overlay = document.querySelector(".overlay")

hamburger.addEventListener("click", () => {
  overlay.classList.toggle("open");
});












window.onscroll = function () { myFunction() };

var header = document.querySelector("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}



const botao = document.querySelector('.scroll-down')
const section = document.querySelector('.section2')

botao.addEventListener('click', function() {
  window.scrollTo({
    top: section.offsetTop,
    behavior: 'smooth'
  })
})