let timer;
let sec = 0;

const leftTime = {
  hour: Math.floor(sec / 3600),
  min: Math.floor((sec % 3600) / 60),
  sec: sec % 60
};

const nowTime = document.getElementById('nowTime');
const setTime = document.getElementById('setTime');
const startTimer = document.getElementById('startTimer');
const stopTimer = document.getElementById('stopTimer');

const numCheck = () => {
    if (sec <= 0) {
        nowTime.textContent = `※正の半角数字を入力してください！`;
    } else {
      
      nowTime.textContent = `残り${leftTime.hour}時間${leftTime.min}分${leftTime.sec}秒：セット完了です`;
};

setTime.addEventListener('click', function () {
    sec = document.getElementById('inputTime').value;

    numCheck();
});

const countDown = () => {
    if (sec <= 0) {
        nowTime.textContent = `※正の半角数字を入力してください！`;
    } else {
        timer = setInterval(() => {
            sec -= 1;
            nowTime.textContent = `残り${leftTime.hour}時間${leftTime.min}分${leftTime.sec}秒`
            console.log(sec);
            if (sec === 0) {
                alert('終了');
                clearInterval(timer);
            }
        }, 1000);
    }
};

startTimer.addEventListener('click', countDown);

stopTimer.addEventListener('click', function () {
    clearInterval(timer);
    nowTime.textContent = `残り${leftTime.hour}時間${leftTime.min}分${leftTime.sec}秒でストップしました``;
});
