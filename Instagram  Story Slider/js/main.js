const view = document.querySelector('.view');
const pages = document.querySelectorAll('.page');
const btns = document.querySelectorAll('.btn');
let images = ['images/img1.jpg', 'images/img2.jpg', 'images/img3.jpg', 'images/img4.jpg'];
let cur = 0;
let value = 0;
let pageValue;
let bool = true;
const story = () => {
    pages.forEach(item => item.style = null);
    view.style.backgroundImage = `url(${images[cur]})`;
    pageValue =  setInterval(() => {
       value++
       pages[cur].firstElementChild.style.width = value + '%';
       value >= 100 ? ( pages[cur].firstElementChild.style.width = null, pages[cur].firstElementChild.style.transition = 'none', clearInterval(pageValue), value = 0, cur++,  story()) : '';
    }, 50)
    cur == images.length ? (cur = 0, value = 0, clearInterval(pageValue), story()) : '';
}
story()
btns.forEach((item, index) => {
    item.addEventListener('mousedown', () => {
        clearInterval(pageValue);
    });
    item.addEventListener('mouseup', () => {
        if(index == 0){
            cur--
            cur < 0 ? (clearInterval(pageValue), cur = images.length - 1, value = 0, story()) : '';
            clearInterval(pageValue);
        }else{
            cur++
            cur == images.length ? (clearInterval(pageValue), cur = 0,  value = 0, story()) : '';
            clearInterval(pageValue);
        }
        value = 0;
        pages.forEach((item) => {
            item.firstElementChild.style.width = null;
            item.firstElementChild.style.transition = 'none';
        })
        story()
    });
});

