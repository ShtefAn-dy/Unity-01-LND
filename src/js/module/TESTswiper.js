import Swiper from 'swiper/bundle';

const swiperTest = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  slidesPerView: 5,
  spaceBetween: 20,
  //сколько слайдов проматываем
  // slidesPerGroup: 2,
  slideToClickedSlide: true,
  centeredSlides: true,


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: "bullets",
    // type: "fraction",
    // type:"progressbar",
    // type:"custom"
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

export default swiperTest;

//  // import Swiper bundle with all modules installed
//  import Swiper from 'swiper/bundle';

//  // import styles bundle
//  import 'swiper/css/bundle';

//  // init Swiper:
//  const swiper = new Swiper(...);