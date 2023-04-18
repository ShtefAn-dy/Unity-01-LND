const scrollNburger = () => {

    const burger = document.querySelector('.burger');
    const navlist = document.querySelector('.main-nav');
    const body = document.body;

    if (burger && navlist) {
        burger.addEventListener('click', e => {

            burger.classList.toggle('active');
            navlist.classList.toggle('active');
            body.classList.toggle('lock');
        });

        navlist.querySelectorAll('.main-nav__link').forEach(link => {
            link.addEventListener('click', () => {
                burger.classList.remove('active');
                navlist.classList.remove('active');
                body.classList.remove('lock');
            });
        });
    }

    // smooth scroll

    const anchors = document.querySelectorAll('a[href*="#"]');
    anchors.forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();

            const blockID = anchor.getAttribute('href').substring(1);

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

};

scrollNburger();

export default scrollNburger;