const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

window.addEventListener("load", function() {
    const preloader = document.getElementById("preloader");
    preloader.style.display = "none";
});

document.addEventListener("DOMContentLoaded", () => {
    // Combination of Formal & Informal
    // Hi There! I'm Harja. Born in Indonesia, June 4th 2005. Graduated from the Software Engineering major at SMKN 1 Lumajang. I'm very interested in the world of Technology, Astronomy and Geography. My daily activity is to learn new things that I didn't know before. I am very interested in the world of technology, astronomy and geography. I like learning new things that I didn't know before. My hobbies are exercising, reading books and listening to songs, and playing Rubik's cubes.
    let aboutMe = `Hi there! I'm Harja,
  Born and raised in Indonesia on June 4th, 2005.
  Indonesian Tech Enthusiast fresh out of SMKN 1 Lumajang with a Software Engineering degree (super proud!). 
  Obsessed with learning new things, especially anything space, geography, or tech-related (gotta conquer this knowledge!). 
  When I'm not hitting the books or jamming to tunes, you might find me working out or tackling a Rubik's Cube.
  `;
    document.getElementById("aboutme-content").innerText = aboutMe;
});