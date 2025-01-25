const slider = document.querySelector('.slider');
const pages = document.querySelectorAll('.page');
const imageNums = document.querySelectorAll('.numImage');
const icon = document.querySelector('.icon');
const pagesBox = document.querySelector('.pagesBox');
const btns = document.querySelectorAll('.btn');
let images = ['images/img1.jpg', 'images/img2.jpg', 'images/img3.jpg', 'images/img4.jpg'];
let cur = 0;
let value = 0;
let set;
for(let i = 0; i < imageNums.length; i++){
    imageNums[i].innerText = `Image ${i + 1}`;
}
const startSlider = () => {
    slider.style.backgroundImage = `url(${images[cur]})`;
    set = setInterval(() => {
        value += .5;
        pages[cur].firstElementChild.style.width = value + '%';
        if(value >= 100){
            cur++;
            value = 0;
            clearInterval(set);
            pages.forEach(item => item.firstElementChild.style.width = null);
            startSlider();
        };
    }, 50); 
    cur == pages.length  ? (cur = 0, clearInterval(set), value = 0,  pages.forEach(item => item.firstElementChild.style.width = null), startSlider()) : '';
}
startSlider();
slider.onmouseover = () => (icon.children[0].className = "fa-solid fa-pause", clearInterval(set));
slider.onmouseleave = () => (icon.children[0].className = "fa-solid fa-play", startSlider()); 
pages.forEach((item, index) => {
    item.parentElement.onclick = () => {
        cur = index;
        value = 0;
        pages.forEach(item => item.firstElementChild.style.width = null);
        pages[cur].firstElementChild.width = value + '%';
        slider.style.backgroundImage = `url(${images[cur]})`;
    };

    item.parentElement.onmouseover  = () => {
        imageNums[index].style.opacity = 1;
    };

    item.parentElement.onmouseleave  = () => {
        imageNums[index].style.opacity = 0;
    };
});
pagesBox.onmouseover = e => (e.stopPropagation(), clearInterval(set), icon.children[0].className = "fa-solid fa-play", startSlider());
pagesBox.onmouseleave = () => (clearInterval(set), icon.children[0].className = "fa-solid fa-pause");
btns[0].onclick = () => {
    pages.forEach(item => item.firstElementChild.style.width = null);
    cur++;
    value = 0;
    clearInterval(set);
    cur == images.length ? cur = 0 : '';
    slider.style.backgroundImage = `url(${images[cur]})`;
};
btns[1].onclick = () => {
    pages.forEach(item => item.firstElementChild.style.width = null);
    cur--
    value = 0;
    clearInterval(set);
    cur < 0  ? cur = images.length - 1 : '';
    slider.style.backgroundImage = `url(${images[cur]})`;
};