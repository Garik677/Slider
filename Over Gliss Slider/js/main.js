const big = document.querySelector('.big');
const mini = document.querySelectorAll('.mini');
const pages = document.querySelectorAll('.page');

for(let i = 0; i < mini.length; i++){
    mini[i].onmouseover = () => {
        big.style.left = '-' + i * 100 + '%';
        pages[i].style.background = 'olivedrab'; 
    }

    mini[i].onmouseleave = () => {
        pages[i].style.background = null;
    };
}

for(let i = 0; i < pages.length; i++){
    pages[i].onmouseover = () => {
        big.style.left = '-' + i * 100 + '%';
    };
}