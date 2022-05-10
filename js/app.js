let slideIndex = 0;

let advanceSlides = (parameterSlide) => {
    slideIndex += parameterSlide;
    showSlides(slideIndex);
};

let showSlides = () => {
    let slides = document.getElementsByClassName(`slide`);

    if (slideIndex === 0) {
        document.getElementById(`prev`).style.display = `none`;
    }
    else if (slideIndex >= slides.length-1) {
        document.getElementById(`next`).style.display = `none`;
    }
    else if (slideIndex > 0) {
        document.getElementById(`prev`).style.display = `block`;
        document.getElementById(`next`).style.display = `block`;
    }

    if (slideIndex > slides.length - 1) {
        slideIndex = slides.length - 1;
    }
    if (slideIndex < 0) {
        slideIndex = 0;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = `none`;
    }
    slides[slideIndex].style.display = `block`;
};

document.body.onkeydown = (e) => {
    let key = e.keyCode || e.which;
    if (key === 37) {
        advanceSlides(-1);
    }
    else if (key === 39) {
        advanceSlides(1);
    }
};
document.getElementById(`prev`).style.display = `none`;
showSlides(slideIndex);
