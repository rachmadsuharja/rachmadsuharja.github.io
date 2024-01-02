const navItems = document.querySelectorAll('.navigation-bar .nav-link');
const home = document.querySelectorAll('#home');
const aboutme = document.querySelectorAll('#aboutme');

navItems.forEach((navItem) => {
    navItem.addEventListener('click', function() {
        navItems.forEach(function(item) {
            item.classList.remove('active');
        });
        navItem.classList.add('active');
    })
})