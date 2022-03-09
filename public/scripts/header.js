const menuToggle = document.querySelector('.header-toggle');
const header = document.querySelector('.header');
const sideMenu = document.querySelector('.header-side-menu');

menuToggle.onclick = (e) => {
    header.classList.toggle('header-toggle-active');
}

window.onresize = (e) => {
    if (screen.width > 969) {
        header.classList.remove('header-toggle-active');
    }
}
window.onclick = (e) => {
    header.contains(e.target) || e.target.matches('.header-toggle') || header.classList.remove('header-toggle-active');
}

let lastScroll = 0;
window.onscroll = (e) => {
    if (header.classList.contains('header-toggle-active')) {
        return;
    }
    if (screen.width > 969) {
        if (document.body.scrollTop > 102 || document.documentElement.scrollTop > 102) {
            header.classList.add('header-up');
        } else {
            header.classList.remove('header-up');
        }
    } else {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            header.classList.add('header-up-responsive');
        } else {
            header.classList.remove('header-up-responsive');
        }
        if (document.documentElement.scrollTop < lastScroll) {
            header.classList.remove('header-up-responsive');
        }
    }
    lastScroll = document.documentElement.scrollTop;
}