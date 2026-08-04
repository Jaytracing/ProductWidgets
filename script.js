const comparison = document.querySelector(".comparison");
const before = document.querySelector(".before-wrapper");
const slider = document.querySelector(".slider");

let active = false;

function move(x){

    const rect = comparison.getBoundingClientRect();

    let position = x - rect.left;

    if(position < 0) position = 0;
    if(position > rect.width) position = rect.width;

    const percent = position / rect.width * 100;

    before.style.width = percent + "%";
    slider.style.left = percent + "%";
}

comparison.addEventListener("mousedown", () => active = true);

window.addEventListener("mouseup", () => active = false);

window.addEventListener("mousemove",(e)=>{

    if(!active) return;

    move(e.clientX);

});

comparison.addEventListener("touchstart",()=>active=true);

window.addEventListener("touchend",()=>active=false);

window.addEventListener("touchmove",(e)=>{

    if(!active) return;

    move(e.touches[0].clientX);

});

move(window.innerWidth/2);