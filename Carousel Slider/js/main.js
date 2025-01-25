const next = document.querySelector('.btn.next');
const prev = document.querySelector('.btn.prev');
const slider = document.querySelector('.slider');
const carousel1 = document.querySelector('.carousel1');
const range1 = document.querySelector('.range');
console.log(range1);

let cur = 0;

slider.onmousewheel = e => {
    if(e.deltaY < 0){
        cur -= 45
    }else{
        cur += 45
    }
    carousel1.style.transform = `rotateX(${'-' + range1.value}deg) rotateY(${cur}deg)`;
    console.log(e.deltaY)
};

next.onclick = ()  => {
    cur -= 45;
    carousel1.style.transform = `rotateX(${'-' + range1.value}deg) rotateY(${cur}deg)`
};

prev.onclick = () => {
    cur += 45;
    carousel1.style.transform = `rotateX(${'-' + range1.value}deg) rotateY(${cur}deg)`;
};

range1.oninput = () => {
    carousel1.style.transform = `rotateX(${'-' + range1.value}deg) rotateY(${cur}deg)`;
}