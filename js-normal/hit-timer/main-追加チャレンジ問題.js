const confirmTime2 = document.querySelector('#confirmTime2');
const startTimer2 = document.querySelector('#startTimer2');

let setStartTime;
let setStopTime;
let timeOutId;

const reset = () => {
    startTimer2.disabled = false;
    confirmTime2.disabled = false;
};

const startTimer = () => {
    setStartTime = new Date();
    console.log(setStartTime);
    startTimer2.disabled = true;
    // console.log(setStartTime);
    timeOutId = setTimeout(() => {
        alert('遅すぎるから強制終了するね！');
        reset();
    }, 5000);
};

const stopTime = () => {
    setStopTime = new Date();
    console.log(setStopTime);
    confirmTime2.disabled = true;
    clearTimeout(timeOutId);

    const timeDifference = Math.abs(setStopTime - setStartTime) / 1000;
    console.log(timeDifference);
    if (timeDifference > 3 && timeDifference < 4) {
        alert('ほぼ3秒！　すごいな！');
        reset();
    } else {
        alert('全然ダメ。やり直し！');
        reset();
    }
};
confirmTime2.addEventListener('click', stopTime);
startTimer2.addEventListener('click', startTimer);
