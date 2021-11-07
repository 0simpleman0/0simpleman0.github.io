const menu = document.querySelector(".menu")
const target = document.querySelectorAll(".target")
menu.addEventListener("click", () => {
    target.forEach((item) => {
        item.classList.toggle('change')
    })
})
const icons = document.querySelectorAll('.section-1-icons i');
let i = 1;
setInterval(() => {
    i++;
    const icon = document.querySelector(".section-1-icons .change")
    icon.classList.remove("change")
    if (i > icons.length) {
        icons[0].classList.add("change");
        i = 1;
    } else {
        icon.nextElementSibling.classList.add("change")
    }

}, 2000)
const gallery = document.querySelector(".gallery")
gallery.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Xin lỗi cái này làm cho vui chứ không click được đâu : )");

})