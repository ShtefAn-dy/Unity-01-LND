const scrollNburger = () => {


  const menu = document.querySelector('.menu__body');
  const menuBtn = document.querySelector('.menu__icon');

  const body = document.body;

  if (menu && menuBtn) {
    menuBtn.addEventListener('click', e => {

      menu.classList.toggle('active');
      menuBtn.classList.toggle('active');
      body.classList.toggle('lock');
    })

    menu.addEventListener('click', e => {
      if (e.target.classList.contains('menu__body')) {
        menu.classList.remove('active');
        menuBtn.classList.remove('active');
        body.classList.remove('lock');
      }
    });

    menu.querySelectorAll('.menu__link').forEach(link => {
      link.addEventListener('click', e => {
        menu.classList.remove('active');
        menuBtn.classList.remove('active');
        body.classList.remove('lock');
      });
    });
  }
  // ** ----------Smooth Scroll to Anchors----------------*/

  const anchors = document.querySelectorAll('a[href*="#"]')

  anchors.forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();

      // получаем ID секции к которой скроллим
      const sectionID = anchor.getAttribute('href').substring(1) //удаляем # из атрибута ссылки (href="#contacts")
      document.getElementById(sectionID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });

};
scrollNburger();

export default scrollNburger;