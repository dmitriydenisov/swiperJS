const swiper = new Swiper(".mySwiper", {
    effect: 'coverflow',
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 100,
        depth: 150,
        modifier: 1.5,
        slideShadows : false,
    },
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev"
    }
});