const btnPrev = document.querySelector(".prevBtn");
const btnNext = document.querySelector(".nextBtn");
const slides = document.querySelectorAll(".slides");

btnPrev.style.display = "none";

slides.forEach(function(slide, index) {
    slide.style.left = `${index * 100}%`
});

let i = 0;

btnNext.addEventListener('click', function() {
    if (i < 3) {
        i++;
    }
    slider()
})

btnPrev.addEventListener('click', function(){
    if (i > 0) {
        i--;
    }
    slider();
});

function slider() {
    if (i === 0) {
        btnPrev.style.display = "none";
    } else {
        btnPrev.style.display = "block";
    }
    if (i === 3) {
        btnNext.style.display = "none";
    } else {
        btnNext.style.display = "block";
    }
    slides.forEach(function(slide) {
        slide.style.transform = `translateX(-${i * 100}%)`
    });
}