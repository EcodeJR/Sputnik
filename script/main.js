const li = document.querySelectorAll(".link");
const sec = document.querySelectorAll("section");

function activeMenu() {
    let len = sec.length;
    while (--len && window.scrollY + 100 < sec[len].offsetTop) {}
    li.forEach(ltx => ltx.classList.remove("active0"));
    li[len].classList.add("active0");
}
activeMenu();
window.addEventListener("scroll", activeMenu);



//slider
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth: true,
        loop: true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        }
    });
});

//loader

var loader = document.getElementById("loader");

window.addEventListener("load", function() {
    loader.style.display = "none";
});