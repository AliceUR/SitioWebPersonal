/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('toogle'),
    /*navClose = document.getElementById('nav-close')*/

    /*===== MENU SHOW =====*/
    /*Validate if constant exists*/
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu')
        })
    }

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
});

/*===== MENU HIDDEN =====*/
/*Validate if constant exists*/
/*if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })*/


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav_menu')
        // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*============scroll reveal======*/



//*=======Action send Email======*//
const btn = document.getElementById('submit');

document.getElementById('form')
    .addEventListener('submit', function(event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'service_03n8fsk';
        const templateID = 'template_p1199y3';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                alert('Sent!');
            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    });





ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 20000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, , { origin: '
        left '});
        ScrollReveal().reveal('.home-content p, .about-content, , { origin: '
            right '});

            /*============typed js======*/
            const typed = new Typed('.multiple-text', {

                        string: ['Architecto Software & Hardware', 'Project Manager', 'Science Data', 'Intelligence Artificial'],
                        typeSpeed: 100,
                        backSpeed: 100,
                        backDelay: 1000,
                        loop: true,

                    };