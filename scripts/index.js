window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    var header = document.querySelector('header');
    var headerHeight = header.offsetHeight;
    if (window.scrollY >= headerHeight) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});