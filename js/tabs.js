const tabBtns = Array.from(document.querySelectorAll("#tab_btn"));
const tabSlide = Array.from(document.querySelectorAll("#tab_slide"));

tabBtns[0].classList.add("active-btn");
tabSlide[0].classList.add("active");

let activeBtn = tabBtns[0];
let activeSlide = tabSlide[0];

tabBtns.forEach((el) => {
    el.addEventListener("click", onTabBtnClick);
});

function onTabBtnClick(e) {
    e.preventDefault();
    const btn = e.target.closest("#tab_btn");
    changeBtn(btn);
}

function changeBtn(btn) {
    if (btn.classList.contains("active-btn")) {
        return;
    }
    activeBtn.classList.remove("active-btn");
    btn.classList.add("active-btn");
    activeBtn = btn;
    changeIndex(btn);
}

function changeIndex(btn) {
    const indexBtn = tabBtns.indexOf(btn);
    changeSlide(indexBtn);
}

function changeSlide(index) {
    activeSlide.classList.remove("active");
    tabSlide[index].classList.add("active");
    activeSlide = tabSlide[index];
}

