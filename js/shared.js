spacingText = document.getElementsByClassName("grow-on-scroll");
let scrollY;

let root = document.querySelector(':root');

document.addEventListener("scroll", function() {
    root.style.setProperty("--scrollbar-opacity", "100%");
    doSpacing();
    startFadeOutScrollbar();
});
document.addEventListener("resize", doSpacing());
document.addEventListener("load", doSpacing());

function doSpacing() {
    scrollY = (window.innerHeight / 2) + window.scrollY;

    for (i = 0; i < spacingText.length; i++) {
        let element = spacingText[i];
        element.style.letterSpacing = (1 * (2 ** (Math.abs(element.getBoundingClientRect().top - (window.innerHeight / 2)) * -0.01))) + "rem";
    };
}

let scrollBarOpacity = 1;
let fadeOutRequest

function fadeOutScrollbar() {
    scrollBarOpacity *= 0.9;
    root.style.setProperty("--scrollbar-opacity", scrollBarOpacity);
    if (scrollBarOpacity >= 0.01) {
        fadeOutRequest = window.requestAnimationFrame(fadeOutScrollbar);
    }
    else {
        return;
    }
}

function startFadeOutScrollbar() {
    window.cancelAnimationFrame(fadeOutRequest);
    scrollBarOpacity = 1;
    setTimeout(() => {
        window.cancelAnimationFrame(fadeOutRequest);
        fadeOutRequest = window.requestAnimationFrame(fadeOutScrollbar);
    }, 1000);
}