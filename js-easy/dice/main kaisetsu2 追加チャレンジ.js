// 今回の課題で使用する各要素を定数に格納
const player1Btn = document.getElementById('player1Btn');
const player2Btn = document.getElementById('player2Btn');
const result = document.getElementById('result');
const setPlayer1dice = document.getElementById('setPlayer1dice');
const setPlayer2dice = document.getElementById('setPlayer2dice');

// 画像初期表示の設定
setPlayer1dice.setAttribute('src', `./img/saikoro1.png`);
setPlayer2dice.setAttribute('src', `./img/saikoro1.png`);

// ローカルスコープを跨ぐために初期値をグローバルに設定
let player1Timer, player2Timer;
let player1Stop;
let player2Stop;

// プレイヤー1側のボタンをクリックしたときに発生する関数を定義
const func1 = () => {
    // ボタンを一度クリックした後に機能しなくさせる
    player1Btn.disabled = true;
    // テキストの初期表示
    result.textContent = '???';
    // サイコロの目をランダムで出してplayer1Numに格納
    // player1Numを変数や定数に格納しないのは
    // ローカルスコープをまたいでplayer2Timerと数字の大小を比較するため;
    player1Timer = setInterval(() => {
        player1Num = Math.floor(Math.random() * 6 + 1);
        setPlayer1dice.setAttribute('src', `./img/saikoro${player1Num}.png`);
    }, 100);
    setTimeout(() => {
        clearInterval(player1Timer);
        // falseとすることで一度クリックしたことを表現する（trueで一致させても問題ない。）
        player1Stop = false;
        if (player1Stop === false && player2Stop === false) {
            console.log(player1Num, player2Num);
            if (player1Num > player2Num) {
                result.textContent = 'player1の勝ち';
            } else if (player1Num === player2Num) {
                result.textContent = '引き分け';
            } else {
                result.textContent = 'player2の勝ち';
            }
            player1Btn.disabled = false;
            player2Btn.disabled = false;

            player1Stop = null;
            player2Stop = null;
        }
    }, 3000);
};

const func2 = () => {
    player2Btn.disabled = true;
    result.textContent = '???';
    player2Timer = setInterval(() => {
        player2Num = Math.floor(Math.random() * 6 + 1);
        setPlayer2dice.setAttribute('src', `./img/saikoro${player2Num}.png`);
    }, 100);
    setTimeout(() => {
        clearInterval(player2Timer);
        player2Stop = false;
        if (player1Stop === false && player2Stop === false) {
            if (player1Num > player2Num) {
                result.textContent = 'player1の勝ち';
            } else if (player1Num === player2Num) {
                result.textContent = '引き分け';
            } else {
                result.textContent = 'player2の勝ち';
            }
            player1Btn.disabled = false;
            player2Btn.disabled = false;
            player1Stop = null;
            player2Stop = null;
        }
    }, 3000);
};

player1Btn.addEventListener('click', func1);
player2Btn.addEventListener('click', func2);
