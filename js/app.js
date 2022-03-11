new fullpage("#fullpage", {
    autoScrolling: true,
    navigation: true,
    anchors: ['home-page', 'about-page', 'contact-page'],
    menu: '#nav-menu',
    navigaionPosition: 'right',
    parrallax: true,
    responsiveWidth: 768
});

const navAnimation = () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    mobileMenu.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            }
            else {
                link.style.animation = `navLinkFade 0.4s ease forwards ${index / 7 + .5}s`;
            }
        });

        mobileMenu.classList.toggle('toggle');
    });
}


navAnimation();