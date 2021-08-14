let slidePosition1 = 0;
const slides1 = document.getElementsByClassName('carousel__item2');

const images1 = document.getElementsByClassName('carousel__select2');
const totalSlides1 = slides1.length;

document.
    getElementById('carousel__button--next2')
    .addEventListener("click", function () {
        moveToNextSlide1();
    });
document.
    getElementById('carousel__button--prev2')
    .addEventListener("click", function () {
        moveToPrevSlide1();
    });

document.
    getElementById('select_4')
    .addEventListener("click", function () {
        selectFirstSlide1();
    });
document.
    getElementById('select_5')
    .addEventListener("click", function () {
        selectSecondSlide1();
    });
document.
    getElementById('select_6')
    .addEventListener("click", function () {
        selectThirdSlide1();
    });


function updateSlidePosition1() {
    for (let slide of slides1) {
        slide.classList.remove('carousel__item--visible');
        slide.classList.add('carousel__item--hidden');
    }
    for (let image of images1){
        image.classList.remove('carousel__active');
    }

    slides1[slidePosition1].classList.add('carousel__item--visible');
}

let timeout1 = setInterval(function updateSliderByInterval() {
    if (slidePosition1 === totalSlides1 - 1) {
        slidePosition1 = 0;
    } else {
        slidePosition1++;
    }
    updateSlidePosition1();
    images1[slidePosition1].classList.add('carousel__active');
}, 5000)

function selectFirstSlide1() {
    slidePosition1 = 0;
    updateSlidePosition1();
    images1[slidePosition1].classList.add('carousel__active');
}
function selectSecondSlide1() {
    slidePosition1 = 1;
    updateSlidePosition1();
    images1[slidePosition1].classList.add('carousel__active');
}
function selectThirdSlide1() {
    slidePosition1 = 2;
    updateSlidePosition1();
    images1[slidePosition1].classList.add('carousel__active');
}


// function moveToNextSlide1() {
//     if (slidePosition1 === totalSlides1 - 1) {
//         slidePosition1 = 0;
//     } else {
//         slidePosition1++;
//     }

//     updateSlidePosition1();
//     console.log(slidePosition1);
// }

// function moveToPrevSlide1() {
//     if (slidePosition1 === 0) {
//         slidePosition1 = totalSlides1 - 1;
//     } else {
//         slidePosition1--;
//     }

//     updateSlidePosition1();
    
//     console.log(slidePosition1);
// }