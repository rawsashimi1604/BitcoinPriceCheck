const dataButton = document.getElementById("data-button");
const tableSection = document.querySelector(".tables");

let btnState = false;

dataButton.addEventListener("click", () => {
    btnState = !btnState;

    if (btnState) {
        tableSection.classList.remove("hide");
        dataButton.textContent = "Hide Data Symbols";
    } else {
        tableSection.classList.add("hide");
        dataButton.textContent = "Show Data Symbols";
    }
})