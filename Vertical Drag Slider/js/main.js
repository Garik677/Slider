const slider = document.querySelector('.slider');
const big =document.querySelector('.big');
const pages =document.querySelectorAll('.page');
const images = document.querySelectorAll('.img');
console.log(images)
let current = 0;
let mouseY = 0;
let bool = false;
slider.onmousedown = e => {
    if(e.button == 0){
        mouseY = e.y
        bool = true;
    }
};

slider.onmousemove = e => {
   if(bool){
        if(e.y < mouseY){
            current += 100
        }else if(e.y > mouseY){
            current -= 100;
        }
        current > (pages.length - 1) * 100 ? current = 0 : current < 0 ? current = (pages.length - 1) * 100 : '';
        bool = false;
        big.style.top = '-' + current + '%';
        pages[current / 100].checked = true;
   }
};

for(let i = 0; i < pages.length; i++){
    pages[i].style.backgroundImage = `url(${images[i].src})`
    pages[i].onchange = () => {
        current = i * 100;
        big.style.top = '-' + current + '%';
        console.log(current)
    };
}

slider.onmouseup = () => bool = false;