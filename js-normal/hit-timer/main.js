const confirmTime = document.querySelector('#confirmTime');
const startTimer = document.querySelector('#startTimer');
const message = document.querySelector('p');

let resultTimer;
let countTime = 0;
let timeoutId;

const resetFunc = () => {
    countTime = 0;
    startTimer.disabled = false;
    confirmTime.disabled = false;
};

const countedTimer = () => {
    startTimer.disabled = true;
    resultTimer = setInterval(() => {
        countTime += 1;
        console.log(countTime);
    }, 1000);

    timeoutId = setTimeout(() => {
        clearInterval(resultTimer);
        alert('遅すぎるからストップするね');
        resetFunc();
    }, 5000);
};

const showResult = () => {
    confirmTime.disabled = true;
    clearInterval(resultTimer);
    clearTimeout(timeoutId);
    if (countTime >= 3 && countTime < 4) {
        alert(`${countTime}秒でした。すごい！！`);
        resetFunc();
    } else {
        alert(`${countTime}秒でした。もう一度チャレンジ！`);
        resetFunc();
    }
};

startTimer.addEventListener('click', countedTimer);
confirmTime.addEventListener('click', showResult);
