const dataButton = document.getElementById("data-button");
const tableSection = document.querySelector(".tables");

// True => show
let btnState = false;

dataButton.addEventListener("click", () => {
    btnState = !btnState;
    // tableSection.classList.toggle("hide");
    tableSection.classList.toggle("fade-active");

    if (btnState) {
        dataButton.textContent = "Hide Data Symbols";

    } else {
        dataButton.textContent = "Show Data Symbols";

    }
})