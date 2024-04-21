const process = document.getElementById("process");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let activeCircle = 1;

prev.addEventListener("click", () => {
    activeCircle--;
    if (activeCircle < 1) activeCircle = 1;
    update();
})

next.addEventListener("click", () => {
    activeCircle++;
    if (activeCircle > circles.length) activeCircle = circles.length;
    update();
})

const update = () => {
    prev.disabled = activeCircle === 1;
    next.disabled = activeCircle === circles.length;
    circles.forEach((circle, index) => {
        if (index < activeCircle) circle.classList.add("active");
        else circle.classList.remove("active");
    });
    const actives = document.querySelectorAll(".active");
    process.style.width = (actives.length - 1) / (circles.length - 1) * 100 + "%";
}