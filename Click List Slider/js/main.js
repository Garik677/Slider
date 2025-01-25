const boxs = document.querySelectorAll('.box');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const pages = document.querySelectorAll('.page');

let cur = 0;

for(let i = 0; i < pages.length; i++){
    pages[i].onchange = () => {
        cur = i;
        for(let j = 0; j < boxs.length; j++){
            boxs[j].style = null;
        }
        boxs[i].style = 'width: 250%; filter: none';
    };
}

boxs[0].style = 'width: 250%; filter: none';
pages[0].checked = true;
next.onclick = () => {
    cur++
    boxs[cur - 1].style = null;
    if(cur > boxs.length - 1){
        cur = 0;
    }
    boxs[cur].style = 'width: 250%; filter: none;';
    pages[cur].checked = true;
}; 

prev.onclick = () => {
    cur--
    boxs[cur + 1].style = null;
    if(cur < 0){
        cur = boxs.length - 1;
    }
    boxs[cur].style = 'width: 250%; filter: none;';
    pages[cur].checked = true;
}; 