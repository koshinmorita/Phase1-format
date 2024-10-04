const setBtn = document.querySelector('#setBtn');
const resetBtn = document.querySelector('#resetBtn');
const showImg = document.querySelector('#showImg');
let i = 0;

const images = [
    {
        img: './img/evolution1.png',
        text: '原人',
    },
    {
        img: './img/evolution2.png',
        text: '旧人',
    },
    {
        img: './img/evolution3.png',
        text: '新人',
    },
    {
        img: './img/evolution4.png',
        text: '現代人',
    },
];

const showImgContent = (i) => {
    const createdImg = document.createElement('img');
    const createdText = document.createElement('p');
    createdImg.setAttribute('src', images[i].img);
    createdText.textContent = images[i].text;
    showImg.appendChild(createdImg);
    showImg.appendChild(createdText);
};

const showImagesFunc = () => {
    // まずはshowImg内の要素をクリアする（リセットのため）
    showImg.innerHTML = '';

    let randomNum = Math.floor(Math.random() * 10 + 1);
    console.log(randomNum);
    if (randomNum === 10) {
        for (let i = 0; i < images.length; i++) {
            showImgContent(i);
        }
    } else if (randomNum >= 8) {
        for (let i = 0; i < 3; i++) {
            showImgContent(i);
        }
    } else if (randomNum >= 5) {
        for (let i = 0; i < 2; i++) {
            showImgContent(i);
        }
    } else {
        for (let i = 0; i < 1; i++) {
            showImgContent(i);
        }
    }
};

setBtn.addEventListener('click', showImagesFunc);
resetBtn.addEventListener('click', () => {
    showImg.innerHTML = '';
});
