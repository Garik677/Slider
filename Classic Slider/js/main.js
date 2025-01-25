const sliderBox = document.querySelector('.slider');
const next = document.querySelector('.btn.next');
const prev = document.querySelector('.btn.prev');
const pages = document.querySelectorAll('.page');
let images = [
    'https://i.pinimg.com/originals/60/c1/43/60c143c5a7e8c9cccae51f5aebda73c0.jpg',
    'https://as2.ftcdn.net/v2/jpg/05/69/31/37/1000_F_569313722_EqfXAN5NM3QOlUYRPp9wQOUKczVIW1eI.jpg',
    'https://wallpaperboat.com/wp-content/uploads/2019/09/beautiful-night-sky-photo.jpg',
    'https://as2.ftcdn.net/v2/jpg/05/69/31/41/1000_F_569314153_SAQD1Kr7k4UobF084aDZj5KiqJxYIONu.jpg',
    'https://c4.wallpaperflare.com/wallpaper/580/824/23/moon-night-nature-house-wallpaper-preview.jpg'
];
let current = 0;
for(let i = 0; i < pages.length; i++){
    pages[i].onchange = () => {
        bool = true;
        sliderBox.style.filter = 'contrast(10)';
        sliderBox.ontransitionend = () => {
            bool = false;
            sliderBox.style.filter = null;
            sliderBox.style.background = `url(${images[i]})`
            sliderBox.style.backgroundPosition = 'center';
            sliderBox.style.backgroundSize = 'cover';
            sliderBox.style.backgroundRepeat = 'no repeat';
            for(let j = 0; j < pages.length; j++){
                if(pages[j].style.transform  == 'scale(1.3)'){
                    pages[j].style.transform = null;
                }
            }
            pages[i].style.transform = 'scale(1.3)';
            current = i;
        }
        
    }
}
let bool = true;
prev.onclick = () => {
    bool = true;
    sliderBox.style.filter = 'contrast(10)';
    sliderBox.ontransitionend = () => {
        if(bool){
            bool = false;
            current++
            sliderBox.style.filter = null;
            pages[current - 1].style.transform = null;
            if(current > pages.length - 1){
            current = 0;
            }
                pages[current].style.transform = 'scale(1.3)';
                sliderBox.style.background = `url(${images[current]})`;
                sliderBox.style.backgroundPosition = 'center';
                sliderBox.style.backgroundSize = 'cover';
                sliderBox.style.backgroundRepeat = 'no repeat';
                pages[current].checked = true;
            }
           
    };
};

next.onclick = () => {
    bool = true;
    sliderBox.style.filter = 'contrast(10)';
    sliderBox.ontransitionend = () => {
        if(bool){
            bool = false;
            sliderBox.style.filter = null;
            current--
            pages[current + 1].style.transform = null;
            if(current < 0){
                current = pages.length - 1;
            }
            pages[current].style.transform = 'scale(1.3)';
            sliderBox.style.background = `url(${images[current]})`;
            sliderBox.style.backgroundPosition = 'center';
            sliderBox.style.backgroundSize = 'cover';
            sliderBox.style.backgroundRepeat = 'no repeat';
            pages[current].checked = true;
        }
    }
};

pages[0].checked = true;
pages[0].style.transform = 'scale(1.3)';
