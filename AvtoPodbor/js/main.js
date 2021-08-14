$(document).ready(function(){
    $('.slider__bottom').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
    });

    $('.menu__btn').on('click', function(){
        $('.nav__links').toggleClass('nav__links--active');
    });
});



$('.slider-single').on('afterChange', function (event, slick, currentSlide) {
    $('.slider-nav').slick('slickGoTo', currentSlide);
    var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $('.slider-nav .slick-slide.is-active').removeClass('is-active');
    $(currrentNavSlideElem).addClass('is-active');
});

$('.slider-nav').on('click', '.slick-slide', function (event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data('slick-index');

    $('.slider-single').slick('slickGoTo', goToSingleSlide);
});


var element = document.getElementById('name__number');
var maskOptions = {
    mask: '+{7}(000)000-00-00'
};
var mask = IMask(element, maskOptions);

var element = document.getElementById('name__number-2');
var maskOptions = {
    mask: '+{7}(000)000-00-00'
};
var mask = IMask(element, maskOptions);