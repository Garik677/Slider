const big = document.querySelector('.big');
const btns = document.querySelectorAll('.btn')
let cur = -100;
let num = 0;
let bool = true;
btns[0].onclick  = () => {
    if(bool){
        bool = false;
        big.style.transition = null;
        num++
        cur -= 100;
        big.style.left = cur + '%';
        num == document.body.firstElementChild.lastElementChild.children.length ? num = 0 : '';
        document.body.firstElementChild.lastElementChild.children[num].checked = true;
        if(cur / 100 == -document.body.firstElementChild.lastElementChild.children.length){
            setTimeout(() => {
                cur = 0;
                big.style.transition = 'none';
            big.style.left = cur + '%';
           }, 420)
        }
        setTimeout(() => {
            bool = true;
           }, 420)
    }
}

btns[1].onmouseover = ()  => {
    if(cur == 0){
            cur = (big.children.length - 1) * -100;
            big.style.transition = 'none';
            big.style.left = cur + '%';
    }
}

btns[0].onmouseover = () => {
    if(cur == (big.children.length - 1) * -100){
            cur = 0;
            big.style.transition = 'none';
            big.style.left = cur + '%';
    }
}

btns[1].onclick  = () => {
    if(bool){
        bool = false;
        big.style.transition = null;
        num--
        cur += 100;
        big.style.left = cur + '%';
        num < 0 ? num = document.body.firstElementChild.lastElementChild.children.length - 1 : '';
        document.body.firstElementChild.lastElementChild.children[num].checked = true;
        if(cur == 0){
            setTimeout(() => {
                cur = (big.children.length - 1) * -100;
                big.style.transition = 'none';
                big.style.left = cur + '%';
        }, 420)
        }
        setTimeout(() => {
            bool = true;
           }, 420)
    }
}

Array.from(document.body.firstElementChild.lastElementChild.children).forEach((item, index) => {
    item.onchange = () => {
        big.style.transition = null;
       cur = index * -100 - 100;
       num = index;
       cur == 0 ? (cur = -100, big.style.left = cur + '%') : big.style.left = cur + '%';
       console.log(cur)
    }
})
