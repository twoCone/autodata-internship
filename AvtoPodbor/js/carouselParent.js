let carouselPosition = 0;
const carousels = document.getElementsByClassName('carousel');
const totalCarousels = carousels.length;
for (let carousel = 0; carousel < totalCarousels; carousel++) { 
document.
    getElementById(`carousel__selectnextcar${carousel}`)
    .onclick = function () {
        console.log("hi")
        if (carouselPosition < totalCarousels - 1) {
            document.getElementById(`carousel_${carouselPosition}`).style.display = 'none';
            document.getElementById(`carousel_${carouselPosition + 1}`).style.display = 'flex';
            carouselPosition++;
        } else {
            document.getElementById(`carousel_${carouselPosition}`).style.display = 'none';
            document.getElementById(`carousel_0`).style.display = 'flex';
            carouselPosition = 0;
        }

    };
}