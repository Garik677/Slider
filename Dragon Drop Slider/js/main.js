const cards = document.querySelectorAll('.card');
const block  = document.querySelector('.big');
const block2  = document.querySelector('.big2');
const blockCard = document.querySelector('.card__block');

let cur;
let bool;
let sec;
let number = 1;
for(let i = 0; i < cards.length; i++){
    cards[i].ondragstart = () => {
        cards[i].style = 'opacity: 0';
        cur = i;
        number = 1;
        console.log(number)
    }

    cards[i].ondragend = () => {
        if(number == 1){
            cards[i].style = null;
        }else{
            cards[i].style = 'width: 100%; height: 100%; transition: .1s; margin: 0; border: none; border-radius: 0;';
        }
    };
    
}

block2.ondragover = () => {
    number = 2;
    block.style = 'box-shadow: inset 0 0 250px white;'
    return false;
};

block2.ondragleave = () => {
    number = 1;
    block.style = null;
    console.log(number)
}

block2.ondrop = () => {
    bool = false
    if(block.firstElementChild != null){
        sec = block.firstElementChild;
        sec.style = null;
        blockCard.append(sec);
    }
    block.append(cards[cur]);
    console.log(number);
};



