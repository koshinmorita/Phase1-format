// const spring = {
//     img: './img/slide1.png',
//     text: '春へ',
// };

// const summer = {
//     img: './img/slide2.png',
//     text: '夏へ',
// };

// const autumn = {
//     img: './img/slide3.png',
//     text: '秋へ',
// };

// const winter = {
//     img: './img/slide4.png',
//     text: '冬へ',
// };

const data = [
    {
        img: './img/slide1.png',
        text: '春へ',
    },
    {
        img: './img/slide2.png',
        text: '夏へ',
    },
    {
        img: './img/slide3.png',
        text: '秋へ',
    },
    {
        img: './img/slide4.png',
        text: '冬へ',
    },
];

let imgNum = 0;

const pushBtn = document.querySelector('#pushBtn');
const viewImg = document.querySelector('#viewImg');

pushBtn.textContent = data[imgNum].text;
viewImg.setAttribute('src', data[imgNum].img);

pushBtn.addEventListener('click', () => {
    if (imgNum === 3) {
        imgNum = 0;
    } else {
        imgNum += 1;
    }
    pushBtn.textContent = data[imgNum].text;
    viewImg.setAttribute('src', data[imgNum].img);
});

const skipBtn = document.querySelector('#skipBtn');
const seasonNum = document.querySelector('#seasonNum');
skipBtn.addEventListener('click', () => {
    imgNum = seasonNum.value;
    imgNum = parseInt(imgNum);
    pushBtn.textContent = data[imgNum].text;
    viewImg.setAttribute('src', data[imgNum].img);
});
