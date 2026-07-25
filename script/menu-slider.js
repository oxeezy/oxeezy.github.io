document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".menu-category").forEach(category => {

        const slider = category.querySelector(".menu-slider");
        const prev = category.querySelector(".slider-prev");
        const next = category.querySelector(".slider-next");

        if (!slider) return;

        const card = slider.querySelector(".cards");

        function scrollAmount() {
            const gap = parseInt(getComputedStyle(slider).gap) || 20;
            return (card ? card.offsetWidth : 280) + gap;
        }

        function updateButtons() {
            prev.disabled = slider.scrollLeft <= 5;

            next.disabled =
                slider.scrollLeft >=
                slider.scrollWidth - slider.clientWidth - 5;
        }

        prev.addEventListener("click", () => {
            slider.scrollBy({
                left: -scrollAmount(),
                behavior: "smooth"
            });
        });

        next.addEventListener("click", () => {
            slider.scrollBy({
                left: scrollAmount(),
                behavior: "smooth"
            });
        });

        slider.addEventListener("scroll", updateButtons);
        window.addEventListener("resize", updateButtons);

        /* ---------- Drag with Mouse ---------- */

        let isDragging = false;
        let startX = 0;
        let scrollLeft = 0;

        slider.addEventListener("mousedown", e => {
            isDragging = true;
            slider.classList.add("dragging");

            startX = e.pageX;
            scrollLeft = slider.scrollLeft;
        });

        window.addEventListener("mouseup", () => {
            isDragging = false;
            slider.classList.remove("dragging");
        });

        window.addEventListener("mousemove", e => {

            if (!isDragging) return;

            e.preventDefault();

            const walk = e.pageX - startX;

            slider.scrollLeft = scrollLeft - walk;

        });

        updateButtons();

    });

});