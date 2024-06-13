document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".show-more_btn");
    const readSection = document.querySelector(".show-more_section");
    if (readSection && btn) {
        btn.addEventListener("click", (e) => {
            readSection.classList.toggle("show-more_section--open");
            e.target.textContent = e.target.textContent.includes("Show More") ?
                "Show Less" :
                "Show More";
        });
    }
});