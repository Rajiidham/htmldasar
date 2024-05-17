const sr = ScrollReveal({
    origin: 'top,',
    distance: '40px',
    duration: 2000,
    reset: true
});

// menu Show//
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId)
    nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
}
showMenu('menu_nav_toggle' , 'nav-menu');

// scroll section active link//
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll' , scrollActive);

function scrollActive() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active');
        } else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active');
        }
    });
}

sr.reveal('.banner-title',{delay: 50,});
sr.reveal('.banner-title p',{delay: 200,});
sr.reveal('.page_title', {delay: 50});
sr.reveal('.beans_page_title', {delay: 50});
sr.reveal('.beans_page_title h3', {delay: 200});


// sr.reveal('.coffeebeans', {delay: 50});
// sr.reveal('.coffeebeans h1', {delay: 50});

