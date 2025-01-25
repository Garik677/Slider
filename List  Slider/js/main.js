const boxs = document.querySelectorAll('.image');
let  images = [
    'https://cdn.pixabay.com/photo/2018/02/13/23/41/nature-3151869_1280.jpg',
    'https://wallpapercave.com/wp/wp5034372.jpg',
    'https://cdn.pixabay.com/photo/2018/12/27/17/53/crystal-ball-photography-3898071_1280.jpg',
    'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg',
    'https://cdn.pixabay.com/photo/2018/02/02/17/29/nature-3125912_1280.jpg',
    'https://static.vecteezy.com/system/resources/thumbnails/039/861/009/small_2x/ai-generated-a-green-tree-in-a-field-with-the-sun-shining-on-it-free-photo.jpg',
    'https://assets.hongkiat.com/uploads/100-absolutely-beautiful-nature-wallpapers-for-your-desktop/blue-sea-sunset.jpg',
    'https://cdn.wallpapersafari.com/24/81/tmgG6Y.jpg'
];

for(let i = 0; i < boxs.length; i++){
    boxs[i].style.backgroundImage = `url(${images[i]})`;

    boxs[i].onmouseover = () => {
        boxs[i].style.width = '350%';
        boxs[i].ontransitionend = () =>{
            boxs[i].style.filter = ' brightness(2)'
            boxs[i].style.transition = '.8s';
        }
    };

    boxs[i].onmouseleave = () => {
        boxs[i].style.width = null
        boxs[i].style.filter = null;
        boxs[i].ontransitionend = () => {
            boxs[i].style.transition = null;
        }
    };
}