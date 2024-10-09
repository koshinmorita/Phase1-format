const no1 = document.querySelector('#nowTime');
const no2 = document.querySelector('#nowTime2');
const no3 = document.querySelector('#nowTime3');

const Numbers = [no1, no2, no3];

let intervals = [];
let confirmedNums = [];

const stopBtn1 = document.querySelector('#setTime1');
const stopBtn2 = document.querySelector('#setTime2');
const stopBtn3 = document.querySelector('#setTime3');
const startBtn = document.querySelector('#startTimer');

const stopBtns = [stopBtn1, stopBtn2, stopBtn3];

const reset = () => {
    intervals = [];
    confirmedNums = [];
    Numbers.forEach((num) => {
        num.innerHTML = 0;
        initialValue = parseInt(num.innerHTML);
    });
    stopBtns.forEach((stopBtn) => {
        stopBtn.disabled = true;
    });
    startBtn.disabled = false;
};

Numbers.forEach((num) => {
    num.innerHTML = 0;
});

const startFunc = () => {
    startBtn.disabled = true;
    stopBtns.forEach((stopBtn) => {
        stopBtn.disabled = false;
    });
    Numbers.forEach((num, index) => {
        const eachInterval = setInterval(() => {
            let confirmedNum = parseInt(num.innerHTML);
            confirmedNum += 1;
            if (confirmedNum > 9) {
                confirmedNum = 0;
            }
            num.innerHTML = confirmedNum;
            confirmedNums[index] = confirmedNum;
            intervals[index] = eachInterval;
            // console.log(intervals[index]);
        }, 500);
    });
};

startBtn.addEventListener('click', startFunc);

const stopFunc = (stopBtn, index) => {
    stopBtn.disabled = true;
    clearInterval(intervals[index]);
};

stopBtns.forEach((stopBtn, index) => {
    stopBtn.disabled = true;
    stopBtn.addEventListener('click', () => {
        stopFunc(stopBtn, index);
        if (
            stopBtns.every((stopBtn) => stopBtn.disabled) &&
            confirmedNums.length === 3
        ) {
            if (
                confirmedNums[0] === confirmedNums[1] &&
                confirmedNums[1] === confirmedNums[2]
            ) {
                alert('成功！');
            } else {
                alert('残念！もう一度チャレンジ！');
            }
            reset();
        }
    });
});
