const slider = document.querySelector('.slider');
const carousel = document.querySelector('.carousel');
const range = document.querySelector('.rg');
const up = document.querySelector('.btn.up');
const down = document.querySelector('.btn.down');

let cur = 0;

slider.onwheel = e => {
    if(e.deltaY < 0){
        cur += 45
    }else{
        cur -= 45
    }
    carousel.style.transform = `rotateY(${range.value}deg) rotateX(${cur}deg)`
};

up.onclick = () => {
    cur += 45;
    carousel.style.transform = ` rotateY(${range.value}deg) rotateX(${cur}deg) `;
};

down.onclick = () => {
    cur -= 45;
    carousel.style.transform = ` rotateY(${range.value}deg) rotateX(${cur}deg)`;
};

range.oninput = () => {
    carousel.style.transform = ` rotateY(${range.value}deg) rotateX(${cur}deg)`;
};

