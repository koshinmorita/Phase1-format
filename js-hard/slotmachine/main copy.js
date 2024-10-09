const no1 = document.querySelector('#nowTime');
const no2 = document.querySelector('#nowTime2');
const no3 = document.querySelector('#nowTime3');

const no4 = document.querySelector('#nowTime4');
const no5 = document.querySelector('#nowTime5');
const no6 = document.querySelector('#nowTime6');

const no7 = document.querySelector('#nowTime7');
const no8 = document.querySelector('#nowTime8');
const no9 = document.querySelector('#nowTime9');

const centNumbers = [no1, no2, no3];
const topNumbers = [no4, no5, no6];
const bottNumbers = [no7, no8, no9];

let centIntervals = [];
let topIntervals = [];
let bottIntervals = [];
let confirmedNums = [];

const stopBtn1 = document.querySelector('#setTime1');
const stopBtn2 = document.querySelector('#setTime2');
const stopBtn3 = document.querySelector('#setTime3');
const startBtn = document.querySelector('#startTimer');

const stopBtns = [stopBtn1, stopBtn2, stopBtn3];

centNumbers.forEach((num) => {
    num.innerHTML = 0;
    num.style.backgroundColor = 'orange';
});

topNumbers.forEach((num) => {
    num.innerHTML = 9;
});

bottNumbers.forEach((num) => {
    num.innerHTML = 1;
});

const reset = () => {
    centIntervals = [];
    topIntervals = [];
    bottIntervals = [];
    confirmedNums = [];
    centNumbers.forEach((num) => {
        num.innerHTML = 0;
        initialValue = parseInt(num.innerHTML);
    });
    topNumbers.forEach((num) => {
        num.innerHTML = 9;
        initialValue = parseInt(num.innerHTML);
    });
    bottNumbers.forEach((num) => {
        num.innerHTML = 1;
        initialValue = parseInt(num.innerHTML);
    });
    stopBtns.forEach((stopBtn) => {
        stopBtn.disabled = true;
    });
    startBtn.disabled = false;
};

const startFunc = () => {
    startBtn.disabled = true;
    stopBtns.forEach((stopBtn) => {
        stopBtn.disabled = false;
    });
    centNumbers.forEach((num, index) => {
        const eachInterval = setInterval(() => {
            let confirmedNum = parseInt(num.innerHTML);
            confirmedNum += 1;
            if (confirmedNum > 9) {
                confirmedNum = 0;
            }
            num.innerHTML = confirmedNum;
            confirmedNums[index] = confirmedNum;
            centIntervals[index] = eachInterval;
        }, 100);
    });
    topNumbers.forEach((num, index) => {
        const eachInterval = setInterval(() => {
            let confirmedNum = parseInt(num.innerHTML);
            confirmedNum += 1;
            if (confirmedNum > 9) {
                confirmedNum = 0;
            }
            num.innerHTML = confirmedNum;
            topIntervals[index] = eachInterval;
        }, 100);
    });
    bottNumbers.forEach((num, index) => {
        const eachInterval = setInterval(() => {
            let confirmedNum = parseInt(num.innerHTML);
            confirmedNum += 1;
            if (confirmedNum > 9) {
                confirmedNum = 0;
            }
            num.innerHTML = confirmedNum;
            bottIntervals[index] = eachInterval;
        }, 100);
    });
};

startBtn.addEventListener('click', startFunc);

const stopFunc = (stopBtn, index) => {
    stopBtn.disabled = true;
    clearInterval(centIntervals[index]);
    clearInterval(topIntervals[index]);
    clearInterval(bottIntervals[index]);
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
