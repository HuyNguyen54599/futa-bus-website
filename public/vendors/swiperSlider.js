const swiper = new Swiper('.swiper', {
    loop: true,
    speed: 500,
    autoplay: {
        delay: 2500,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // breakpoints: {
    //     // when window width is >= 320px
    //     320: {
    //         slidesPerView: 1,
    //         spaceBetween: 0
    //     },
    //     // when window width is >= 480px
    //     480: {
    //         slidesPerView: 1,
    //         spaceBetween: 0
    //     },
    //     // when window width is >= 640px
    //     640: {
    //         slidesPerView: 1,
    //         spaceBetween: 0
    //     }
    // }
});