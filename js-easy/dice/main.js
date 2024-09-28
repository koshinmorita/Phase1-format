// 今回の課題で使用する各要素を定数に格納
const player1Btn = document.querySelector('#player1Btn');
const player2Btn = document.querySelector('#player2Btn');
const resultMessage = document.querySelector('#result');
const setPlayer1dice = document.querySelector('#setPlayer1dice');
const setPlayer2dice = document.querySelector('#setPlayer2dice');

// 画像初期表示の設定
setPlayer1dice.setAttribute('src', '/img/saikoro1.png');
setPlayer2dice.setAttribute('src', '/img/saikoro1.png');

// プレイヤー1側のボタンをクリックしたときに発生する関数を定義
const func1 = () => {
    // ボタンを一度クリックした後に機能しなくさせる
    player1Btn.disabled = true;
    // テキストの初期表示
    resultMessage.textContent = '結果はどうなる？？';
    // サイコロの目をランダムで出してrandum1Num1に格納
    // randum1Num1を変数や定数に格納しないのは
    // ローカルスコープをまたいでrandum1Num2と数字の大小を比較するため;
    const func1Timer = setInterval(() => {
        randomNum1 = Math.floor(Math.random() * 6 + 1);
        const rusultImgSrc1 = `./img/saikoro${randomNum1}.png`;
        setPlayer1dice.setAttribute('src', rusultImgSrc1);
    }, 50);

    setTimeout(() => {
        clearInterval(func1Timer);
        if (player1Btn.disabled && player2Btn.disabled) {
            if (randomNum1 > randomNum2) {
                result.textContent = 'player1の勝ち';
            } else if (randomNum2 > randomNum1) {
                result.textContent = 'player2の勝ち';
            } else {
                result.textContent = '引き分け';
            }
            player1Btn.disabled = false;
            player2Btn.disabled = false;
        }
    }, 2000);
};

const func2 = () => {
    player2Btn.disabled = true;
    resultMessage.textContent = '結果はどうなる？？';

    const func2Timer = setInterval(() => {
        randomNum2 = Math.floor(Math.random() * 6 + 1);
        const rusultImgSrc2 = `./img/saikoro${randomNum2}.png`;
        setPlayer2dice.setAttribute('src', rusultImgSrc2);
    }, 50);

    setTimeout(() => {
        clearInterval(func2Timer);
        if (player1Btn.disabled && player2Btn.disabled) {
            if (randomNum1 > randomNum2) {
                result.textContent = 'player1の勝ち';
            } else if (randomNum2 > randomNum1) {
                result.textContent = 'player2の勝ち';
            } else {
                result.textContent = '引き分け';
            }
            player1Btn.disabled = false;
            player2Btn.disabled = false;
        }
    }, 2000);
};

player1Btn.addEventListener('click', func1);
player2Btn.addEventListener('click', func2);
