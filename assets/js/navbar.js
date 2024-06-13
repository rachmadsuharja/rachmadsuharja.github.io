document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector("ul");
    const links = navbar.getElementsByTagName("a");

    window.addEventListener("scroll", () => {
        const currentScroll = document.documentElement.scrollTop;
        for (let i = 0; i < links.length; i++) {
            let link = links[i];
            let sectionId = link.getAttribute("href");
            let section = document.querySelector(sectionId);
            if (
                section &&
                section.offsetTop <= currentScroll &&
                section.offsetTop + section.offsetHeight > currentScroll
            ) {
                link.style.fontWeight = 650;
                link.style.color = "#00abf0";
            } else {
                link.style.fontWeight = "normal";
                link.style.color = "#ededed";
            }
        }
    });
});