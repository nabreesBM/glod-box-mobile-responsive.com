const navbar = document.querySelector(".navbar");
document.querySelector('#menu').onclick = () =>{
    navbar.classList.toggle('active');
}
const search = document.querySelector(".search");
document.querySelector('#searchbar').onclick = () =>{
    search.classList.toggle('searchactive');
}

var swiper = new Swiper(".all-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
  
      790: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
  
      1080: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
  
      1280: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      1350: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      1550: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1800: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
    },
  });