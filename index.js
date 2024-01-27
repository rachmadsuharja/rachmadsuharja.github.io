const navItems = document.querySelectorAll('.navigation-bar .nav-link');
const home = document.querySelectorAll('#home');
const aboutme = document.querySelectorAll('#aboutme');

window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
});

navItems.forEach((navItem) => {
    navItem.addEventListener('click', function() {
        navItems.forEach(function(item) {
            item.classList.remove('active');
        });
        navItem.classList.add('active');
    })
})