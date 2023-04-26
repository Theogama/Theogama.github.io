// UI vars
let toggleMenu = document.querySelector('.menu__bar');
const mobileMenu = document.querySelector(".mobile-menu");
console.log(toggleMenu);

// Mobile Menu Starts Here
toggleMenu.addEventListener('click', (e) => {
    // code here 
    mobileMenu.classList.toggle('active')
    e.preventDefault(); // prevent default behaviour
});
// Mobile Menu Ends Here

// Testimonial Slider
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    autoplay: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
        nextEl: '.testimonial-left__buttons .btn_next',
        prevEl: '.testimonial-left__buttons .btn_prev',
    },
    button: {
      DownloadCV: 'https://drive.google.com/file/d/18Gs1Z7y9SE7FNxP0Zd-4s8gYtu5ks6Yl/view?usp=share_link'
    }
  });
