import Swiper from 'swiper/bundle';

const teamSlider = new Swiper('.team-slider', {
  // Optional parameters
  direction: 'horizontal',
  // loop: true,

  slidesPerView: 3,
  // spaceBetween: 20,
  //сколько слайдов проматываем
  slidesPerGroup: 1,
  slideToClickedSlide: true,
  // centeredSlides: true,


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: "bullets",
    // type: "fraction",
    // type:"progressbar",
    // type:"custom"
  },
});