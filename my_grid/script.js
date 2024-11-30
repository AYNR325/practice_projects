const header = document.querySelector("#heading");
const mainSec = document.querySelector("#main-content");

header.addEventListener("click", () => {
    mainSec.scrollIntoView({ behavior: "smooth" }); // Scrolls to the section smoothly
});

