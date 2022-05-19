$('.payment-slider').slick({
    slidesToShow: 4,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 3,
                arrows: false,
                variableWidth: true,
                autoplay: true,
                autoplaySpeed: 3000,
            }
        }
    ]
});
