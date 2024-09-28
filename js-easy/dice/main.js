// 今回の課題で使用する各要素を定数に格納
const player1Btn = document.querySelector('#player1Btn');
const player2Btn = document.querySelector('#player2Btn');
const resultMessage = document.querySelector('#result');
const setPlayer1dice = document.querySelector('#setPlayer1dice');
const setPlayer2dice = document.querySelector('#setPlayer2dice');

// ローカルスコープをまたいで大小を比較するため、グローバルに変数を定義
let randomNum1;
let randomNum2;

// クリックされたら trueとする。（初期値はnull）
// グローバルに定義しておくことで、ローカルスコープを跨いで使用ができる
let clickJudge1;
let clickJudge2;

// 画像初期表示の設定
setPlayer1dice.setAttribute('src', '/img/saikoro1.png');
setPlayer2dice.setAttribute('src', '/img/saikoro1.png');

// プレイヤー1側のボタンをクリックしたときに発生する関数を定義
const rollDice1 = () => {
    console.log(clickJudge1);
    // ボタンを一度クリックした後に機能しなくさせる
    player1Btn.disabled = true;
    // テキストの初期表示
    resultMessage.textContent = '結果はどうなる？？';
    // サイコロの目をランダムで出してrandum1Num1に格納

    const func1Timer = setInterval(() => {
        randomNum1 = Math.floor(Math.random() * 6 + 1);
        const rusultImgSrc1 = `./img/saikoro${randomNum1}.png`;
        setPlayer1dice.setAttribute('src', rusultImgSrc1);
    }, 50);

    setTimeout(() => {
        clickJudge1 = true;
        clearInterval(func1Timer);
        if (clickJudge1 && clickJudge2) {
            if (randomNum1 > randomNum2) {
                result.textContent = 'player1の勝ち';
            } else if (randomNum2 > randomNum1) {
                result.textContent = 'player2の勝ち';
            } else {
                result.textContent = '引き分け';
            }
            player1Btn.disabled = false;
            player2Btn.disabled = false;

            clickJudge1 = null;
            clickJudge2 = null;
        }
    }, 2000);
};

const rollDice2 = () => {
    player2Btn.disabled = true;
    resultMessage.textContent = '結果はどうなる？？';
    const func2Timer = setInterval(() => {
        randomNum2 = Math.floor(Math.random() * 6 + 1);
        const rusultImgSrc2 = `./img/saikoro${randomNum2}.png`;
        setPlayer2dice.setAttribute('src', rusultImgSrc2);
    }, 50);

    setTimeout(() => {
        clickJudge2 = true;
        clearInterval(func2Timer);
        if (clickJudge1 && clickJudge2) {
            if (randomNum1 > randomNum2) {
                result.textContent = 'player1の勝ち';
            } else if (randomNum2 > randomNum1) {
                result.textContent = 'player2の勝ち';
            } else {
                result.textContent = '引き分け';
            }
            player1Btn.disabled = false;
            player2Btn.disabled = false;

            clickJudge1 = null;
            clickJudge2 = null;
        }
    }, 2000);
};

player1Btn.addEventListener('click', rollDice1);
player2Btn.addEventListener('click', rollDice2);
