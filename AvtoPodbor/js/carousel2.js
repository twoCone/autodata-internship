let slidePosition2 = 0;
const slides2 = document.getElementsByClassName('carousel__item3');

const images2 = document.getElementsByClassName('carousel__select3');
const totalSlides2 = slides.length;

document.
    getElementById('carousel__button--next3')
    .addEventListener("click", function () {
        moveToNextSlide2();
    });
document.
    getElementById('carousel__button--prev3')
    .addEventListener("click", function () {
        moveToPrevSlide2();
    });

document.
    getElementById('select_7')
    .addEventListener("click", function () {
        selectFirstSlide2();
    });
document.
    getElementById('select_8')
    .addEventListener("click", function () {
        selectSecondSlide2();
    });
document.
    getElementById('select_9')
    .addEventListener("click", function () {
        selectThirdSlide2();
    });


function updateSlidePosition2() {
    for (let slide of slides2) {
        slide.classList.remove('carousel__item--visible');
        slide.classList.add('carousel__item--hidden');
    }
    for (let image of images2){
        image.classList.remove('carousel__active');
    }

    slides2[slidePosition2].classList.add('carousel__item--visible');
}

let timeout2 = setInterval(function updateSliderByInterval() {
    if (slidePosition2 === totalSlides2 - 1) {
        slidePosition2 = 0;
    } else {
        slidePosition2++;
    }
    updateSlidePosition2();
    images2[slidePosition2].classList.add('carousel__active');
}, 5000)

function selectFirstSlide2() {
    slidePosition2 = 0;
    updateSlidePosition2();
    images2[slidePosition2].classList.add('carousel__active');
}
function selectSecondSlide2() {
    slidePosition2 = 1;
    updateSlidePosition2();
    images2[slidePosition2].classList.add('carousel__active');
}
function selectThirdSlide2() {
    slidePosition2 = 2;
    updateSlidePosition2();
    images2[slidePosition2].classList.add('carousel__active');
}


// function moveToNextSlide2() {
//     if (slidePosition2 === totalSlides2 - 1) {
//         slidePosition2 = 0;
//     } else {
//         slidePosition2++;
//     }

//     updateSlidePosition2();
//     console.log(slidePosition2);
// }

// function moveToPrevSlide2() {
//     if (slidePosition2 === 0) {
//         slidePosition2 = totalSlides2 - 1;
//     } else {
//         slidePosition2--;
//     }

//     updateSlidePosition2();
    
//     console.log(slidePosition2);
// }