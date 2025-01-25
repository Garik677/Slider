const boxs = document.querySelectorAll('.mini');
const pages = document.querySelectorAll('.page');

let images = ['images/img1.jpg', 'images/img2.jpg', 'images/img3.jpg', 'images/img4.jpg', 'images/img5.jpg'];
let current = 0;
for(let i = 0; i < boxs.length; i++){
    boxs[i].onmouseover = () => {
        pages[i].style.background = 'orange';
        for(let j = 0; j < boxs.length; j++){
            boxs[j].style.backgroundImage = `url(${images[i]})`;
        }
    }; 
    boxs[i].onmouseleave = () => {
        pages[i].style.background  = null;
    };
}  

for(let i = 0; i < pages.length; i++){
    pages[i].onmouseover = () => {
        for(let j = 0; j < pages.length; j++){
            boxs[j].style.backgroundImage = `url(${images[i]})`
        }
    };
}
