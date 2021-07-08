function activeSlide(active = 0) {
    const slides = document.querySelectorAll('.slide')

    slides[active].classList.add('active')
 
    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActive()

            slide.classList.add('active')
        })
    }
    function clearActive() {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }
}

activeSlide(3) 