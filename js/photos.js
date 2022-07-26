$( document ).ready(function() {

    const dose_carouselElement = document.querySelector('#dose-carousel')
    const dose_carousel = new bootstrap.Carousel(dose_carouselElement, {
        interval: 4000,
        pause: "hover",
        wrap: true
    });

    const berkzip_carouselElement = document.querySelector('#berkzip-carousel')
    const berkzip_carousel = new bootstrap.Carousel(berkzip_carouselElement, {
        interval: 3000,
        pause: "hover",
        wrap: true
    });

    const CLifestyle_carouselElement = document.querySelector('#CLifestyle-carousel')
    const CLifestyle_carousel = new bootstrap.Carousel(CLifestyle_carouselElement, {
        interval: 3000,
        pause: "hover",
        wrap: true
    });

    const GN_carouselElement = document.querySelector('#GaurdianNutrition-carousel')
    const GN_carousel = new bootstrap.Carousel(GN_carouselElement, {
        interval: 3000,
        pause: "hover",
        wrap: true
    });

});