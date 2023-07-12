import Swiper from 'swiper/bundle';

const teamSlider = new Swiper('.team__swiper', {
  // Optional parameters
  direction: 'horizontal',
  // loop: true,

  slidesPerView: 3,
  spaceBetween: 20,
  //сколько слайдов проматываем
  slidesPerGroup: 1,
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
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

export default teamSlider;