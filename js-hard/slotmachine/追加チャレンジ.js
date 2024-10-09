const no1 = document.querySelector('#nowTime');
const no2 = document.querySelector('#nowTime2');
const no3 = document.querySelector('#nowTime3');

const no4 = document.querySelector('#nowTime4');
const no5 = document.querySelector('#nowTime5');
const no6 = document.querySelector('#nowTime6');

const no7 = document.querySelector('#nowTime7');
const no8 = document.querySelector('#nowTime8');
const no9 = document.querySelector('#nowTime9');

const stopBtn1 = document.querySelector('#setTime1');
const stopBtn2 = document.querySelector('#setTime2');
const stopBtn3 = document.querySelector('#setTime3');

const startBtn = document.querySelector('#startTimer');

const numbersCent = [no1, no2, no3];
numbersCent.forEach((num) => {
    num.innerHTML = 0; // 各数字の初期化
    num.style.backgroundColor = 'orange';
});

const numbersTop = [no4, no5, no6];
numbersTop.forEach((num) => {
    num.innerHTML = 9; // 各数字の初期化
});

const numbersBott = [no7, no8, no9];
numbersBott.forEach((num) => {
    num.innerHTML = 1; // 各数字の初期化
});

let centIntervals = []; // 各ルーレットのインターバルを保存する配列
let topIntervals = [];
let bottIntervals = [];
let numValues = []; // グローバルに値を保存する配列

const btns = [stopBtn1, stopBtn2, stopBtn3];
btns.forEach((btn) => {
    btn.disabled = true;
});

const reset = () => {
    numbersCent.forEach((num) => {
        num.innerHTML = 0;
    });

    numbersTop.forEach((num) => {
        num.innerHTML = 9;
    });

    numbersBott.forEach((num) => {
        num.innerHTML = 1;
    });

    btns.forEach((btn) => {
        btn.disabled = true;
    });
    startBtn.disabled = false;
    centIntervals = [];
    topIntervals = [];
    bottIntervals = [];
    numValues = [];
};

const startFunc = () => {
    startBtn.disabled = true; // スタートボタンを無効化
    btns.forEach((btn) => {
        btn.disabled = false;
    });

    numbersCent.forEach((num, index) => {
        const centInterval = setInterval(() => {
            let currentValue = parseInt(num.innerHTML) + 1;
            if (currentValue > 9) {
                currentValue = 0; // 10になったら0に戻す
            }
            num.innerHTML = currentValue;
            numValues[index] = currentValue; // グローバル配列に保存
        }, 500);
        centIntervals[index] = centInterval; // インターバルを配列に保存
    });

    numbersTop.forEach((num, index) => {
        const topInterval = setInterval(() => {
            let currentValue = parseInt(num.innerHTML) + 1;
            if (currentValue > 9) {
                currentValue = 0; // 10になったら0に戻す
            }
            num.innerHTML = currentValue;
        }, 500);
        topIntervals[index] = topInterval; // インターバルを配列に保存
    });

    numbersBott.forEach((num, index) => {
        const bottInterval = setInterval(() => {
            let currentValue = parseInt(num.innerHTML) + 1;
            if (currentValue > 9) {
                currentValue = 0; // 10になったら0に戻す
            }
            num.innerHTML = currentValue;
        }, 500);
        bottIntervals[index] = bottInterval; // インターバルを配列に保存
    });
};

startBtn.addEventListener('click', startFunc);

const stopFunc = (index) => {
    btns[index].disabled = true;
    clearInterval(centIntervals[index]); // centIntervalを停止
    clearInterval(topIntervals[index]); // topIntervalを停止
    clearInterval(bottIntervals[index]); // bottIntervalを停止
    if (btns.every((btn) => btn.disabled)) {
        //btns[0].disabled && btns[1].disabled && btns[2].disabled
        if (numValues[0] === numValues[1] && numValues[1] === numValues[2]) {
            alert('成功');
        } else {
            alert('残念！もう一度チャレンジしよう！');
        }
        reset();
    }
};

stopBtn1.addEventListener('click', () => stopFunc(0)); // no1を停止
stopBtn2.addEventListener('click', () => stopFunc(1)); // no2を停止
stopBtn3.addEventListener('click', () => stopFunc(2)); // no3を停止
