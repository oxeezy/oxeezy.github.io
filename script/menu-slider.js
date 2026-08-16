document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.menu-category').forEach((category) => {

        const slider = category.querySelector('.menu-slider');
        const card = category.querySelector('.cards');

        const previousButton = category.querySelector('.slider-prev');
        const nextButton = category.querySelector('.slider-next');

        nextButton.addEventListener('click', () => {
            slider.scrollLeft += card.offsetWidth;
        });

        previousButton.addEventListener('click', () => {
            slider.scrollLeft -= card.offsetWidth;
        });

    });

});