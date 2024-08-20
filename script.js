const selectField = document.getElementById("selectField");
const list = document.getElementById("list");
const selectText = document.getElementById("selectText");
const arrowIcon = document.getElementById("arrowIcon");
const options = document.getElementsByClassName("options");

selectField.addEventListener("click", () => {
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
});

[...options].forEach((option) => {
    option.onclick = function () {
        selectText.innerHTML = this.textContent;
        list.classList.toggle("hide");
        // arrowIcon.classList.toggle("rotate");
    }
});