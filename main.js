let elForm = document.querySelector(".js-form");
let elResults = document.querySelector(".results");

elForm.addEventListener ("submit", function (evt) {
    evt.preventDefault();

    elResults.classList.add("results--open");
});


