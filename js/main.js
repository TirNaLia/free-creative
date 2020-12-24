let scrollDownBtn = document.querySelector('.header-feedback-btn');
let target = document.querySelector('.application');

scrollDownBtn.onclick = function() {
    window.scrollTo ({
    top: target.offsetTop,
    behavior: "smooth"
});
}