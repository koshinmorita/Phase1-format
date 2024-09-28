// クリックイベントを発生させるため
const startBtn = document.getElementById('diceBtn');
// 直後に作成するイメージタグを挿入するため
const body = document.querySelector('body');
// イメージタグを作成するため
const dice = document.createElement('img');
// イメージタグのをcssで成形
dice.style.width = '100px';
dice.style.height = '100px';

// 上記で作成したイメージタグの初期表示を設定
let diceNum = './img/saikoro1.png';
dice.setAttribute('src', diceNum);
body.appendChild(dice);

// スタートボタンをクリックしたときの関数を定義
startBtn.addEventListener('click', () => {
    // 後にclearIntervalを機能させるために変数へ格納
    // setIntervalの第一引数に実行させ続ける関数を設定
    // 第二引数には関数を実行する間隔をミリ秒で設定
    let timer = setInterval('randomlyChangeTheImage()', 50);
    // setTimeoutは、指定した時間が経過した後に特定の関数を1回だけ実行するためのメソッド。
    // 第一引数： 実行したい関数（または無名関数）。
    // 第二引数：ミリ秒単位で指定する遅延時間（1000ミリ秒 = 1秒）。
    setTimeout(() => {
        clearInterval(timer);
    }, 3000);
});

const randomlyChangeTheImage = () => {
    diceNum = `./img/saikoro${Math.floor(Math.random() * 6 + 1)}.png`;
    dice.setAttribute('src', diceNum);
};
