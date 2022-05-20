let elForm = document.querySelector(".js-form");
let elResults = document.querySelector(".results");
let elBtnResults = document.querySelector(".js-btn-results");

if (elForm) {
    elForm.addEventListener ("submit", function (evt) {
        evt.preventDefault();
    
        elResults.classList.add("results--open");
    });
}

if (elResults) {
    elResults.addEventListener("click", function (evt) {
        if (evt.target.matches (".js-btn-results")) {
            // Change text
            evt.target.textContent = "Copied";

            // Change bgcolor
            evt.target.classList.add("btn-results-dark");

            // Copy text
            navigator.clipboard.writeText(evt.target.previousElementSibling.textContent);

            setTimeout(function () {
                evt.target.textContent = "Copy";
                evt.target.classList.remove("btn-results-dark");
            },1000)
        }
    })
}



