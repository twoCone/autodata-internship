let slidePosition = 0;
const slides = document.getElementsByClassName('carousel__item1');
const images = document.getElementsByClassName('carousel__select1');
const totalSlides = slides.length;

document.
    getElementById('carousel__button--next')
    .addEventListener("click", function () {
        moveToNextSlide();
    });
document.
    getElementById('carousel__button--prev')
    .addEventListener("click", function () {
        moveToPrevSlide();
    });

document.
    getElementById('select_1')
    .addEventListener("click", function () {
        selectFirstSlide();
    });
document.
    getElementById('select_2')
    .addEventListener("click", function () {
        selectSecondSlide();
    });
document.
    getElementById('select_3')
    .addEventListener("click", function () {
        selectThirdSlide();
    });


function updateSlidePosition() {
    for (let slide of slides) {
        slide.classList.remove('carousel__item--visible');
        slide.classList.add('carousel__item--hidden');
    }
    for (let image of images) {
        image.classList.remove('carousel__active');
    }

    slides[slidePosition].classList.add('carousel__item--visible');
}

let timeout = setInterval(function updateSliderByInterval() {
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    updateSlidePosition();
    images[slidePosition].classList.add('carousel__active');
}, 5000)

function selectFirstSlide() {
    slidePosition = 0;
    updateSlidePosition();
    images[slidePosition].classList.add('carousel__active');
}
function selectSecondSlide() {
    slidePosition = 1;
    updateSlidePosition();
    images[slidePosition].classList.add('carousel__active');
}
function selectThirdSlide() {
    slidePosition = 2;
    updateSlidePosition();
    images[slidePosition].classList.add('carousel__active');
}



// function moveToNextSlide() {
//     if (slidePosition === totalSlides - 1) {
//         slidePosition = 0;
//     } else {
//         slidePosition++;
//     }

//     updateSlidePosition();
//     console.log(slidePosition);
// }

// function moveToPrevSlide() {
//     if (slidePosition === 0) {
//         slidePosition = totalSlides - 1;
//     } else {
//         slidePosition--;
//     }

//     updateSlidePosition();

//     console.log(slidePosition);
// }