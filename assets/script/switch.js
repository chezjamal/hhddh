let buttons = document. querySelectorAll(".home-navbar button");
let buttonsArray = Array.from(buttons);
let pages = document.querySelectorAll(".home-all-part article");
let pagesArray = Array.from(pages);


buttonsArray.forEach((ele) => {
    ele.addEventListener("click", (e) => {
        buttonsArray.forEach((rer) => {
            rer.classList.remove("active");
        })
        e.currentTarget.classList.add("active");

        pagesArray.forEach((rer) => {
            rer.classList.remove("active");
        })
        document.querySelector(e.currentTarget.dataset.open).classList.add("active");
    })
})