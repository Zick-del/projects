const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const container = document.querySelector('.container')
const slidesCount = mainSlide.querySelectorAll('div').length
let activeSlideindex = 0

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

upBtn.addEventListener('click', () => {
    changeSlides('up')
})

downBtn.addEventListener('click', () => {
    changeSlides('down')
})

function changeSlides(direction) {
    if (direction === 'up') {
        activeSlideindex++
        if (activeSlideindex === slidesCount) {
            activeSlideindex = 0
        }
    } else if (direction === 'down') {
        activeSlideindex--
        if (activeSlideindex < 0) {
            activeSlideindex = slidesCount - 1
        }
    }


    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideindex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideindex * height}px)`
}
