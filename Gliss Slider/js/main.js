const big = document.querySelector('.big__box');
const next  = document.querySelector('.btn.next');
const prev  = document.querySelector('.btn.prev');
const pages = document.querySelectorAll('.page');

let x = 0;
let current = 0;
for(let i = 0; i < pages.length; i++){
    pages[i].onchange = () =>{
        current = i * -100;
        big.style.left = current + '%';
        for(let j = 0; i < pages.length; j++){
            if(pages[j].style.transform == 'scale(1.1)'){
                pages[j].style.transform = null;
            }
            pages[i].style.transform = 'scale(1.1)';
        }
    };
}


next.onclick = () => {
    current -=100
    pages[current / -100 - 1].style.transform = null;
    if(current == pages.length * -100){
        current = 0;
    }
    pages[current / -100].style.transform = 'scale(1.1)';
    pages[current / -100].checked = true;
    big.style.left = current + '%';    
};

prev.onclick = () => {
    current += 100
    pages[current / -100 + 1].style.transform = null;
    if(current > 0){
        current = (pages.length - 1) * -100;
    }
    pages[current / -100].style.transform = 'scale(1.1)';
    pages[current / -100].checked = true;
    big.style.left = current + '%';  
};

pages[0].checked = true;