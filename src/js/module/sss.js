import Swiper from 'swiper/bundle';

const swiperTest = new Swiper('.sss', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  slidesPerView: 3,
  spaceBetween: 20,
  //сколько слайдов проматываем
  slidesPerGroup: 2,
  slideToClickedSlide: true,
 
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
    nextEl: '.swiper-prev',
    prevEl: '.swiper-next',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

export default swiperTest;