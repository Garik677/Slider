const sliderBlock = document.querySelector('.slider');
const slider = document.querySelector('.big');
const next = document.querySelector('.btn.next');
const prev = document.querySelector('.btn.prev');
const pages = document.querySelectorAll('.page');


let current = 0;
let bool = false
let mouseX;
sliderBlock.onmousedown = e => {
    if(e.button == 0){
        mouseX = e.x;
        console.log(mouseX);
        bool = true
    }
};

sliderBlock.onmousemove = e => {
    if(bool){
        if(e.x < mouseX){
            current += 100;
            bool = false;
            if(current > (pages.length - 1) * 100){
                current = 0;
            }
        }else if(e.x > mouseX){
            current -= 100;
            bool = false;
            if(current < 0){
                current = (pages.length - 1) * 100;
            }
        }
        slider.style.left = '-' + current + '%';
        pages[current / 100].checked = true;
    }
};

sliderBlock.onmouseup = () => bool = false;
    

next.onclick = () => {
    current += 100
    if(current > (pages.length - 1) * 100){
        current = 0;
    }
    slider.style.left = '-' + current + '%';
    pages[current / 100].checked = true;
};  

prev.onclick = () => {
    current -= 100;
    if(current < 0){
        current = (pages.length - 1) * 100;
    }
    slider.style.left = '-'  + current + '%';
    pages[current / 100].checked = true;
};

for(let i  = 0; i < pages.length; i++){
    pages[i].onchange = () => {
        current = i * 100;
        slider.style.left = '-' +  current + '%';
    };
}


