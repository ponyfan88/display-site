const arrow = document.getElementById("selectable-arrow-bit");

arrow.addEventListener("click", function() {
    document.getElementById("arrow").classList.remove("bounce");
    window.scrollTo(0, window.innerHeight * 1.1)
})