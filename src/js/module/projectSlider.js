import Swiper from 'swiper/bundle';

const projectsSlider = new Swiper('.projects-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  slidesPerView: 4,
  spaceBetween: 20,
  //сколько слайдов проматываем
  slidesPerGroup: 1,
  slideToClickedSlide: true,

  // Navigation arrows
  navigation: {
    nextEl: '.projects-swiper-next',
    prevEl: '.projects-swiper-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

export default projectsSlider;