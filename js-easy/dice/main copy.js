// 今回の課題で使用する各要素を定数に格納
const player1Btn = document.querySelector('#player1Btn');
const player2Btn = document.querySelector('#player2Btn');
const resultMessage = document.querySelector('#result');
const setPlayer1dice = document.querySelector('#setPlayer1dice');
const setPlayer2dice = document.querySelector('#setPlayer2dice');

// グローバル変数
let randomNum1, randomNum2;
let clickJudge1 = false,
    clickJudge2 = false;

// 画像初期表示の設定
setPlayer1dice.setAttribute('src', '/img/saikoro1.png');
setPlayer2dice.setAttribute('src', '/img/saikoro1.png');

// サイコロを回し、結果を処理する共通関数
const rollDice = (playerNum, setDiceImg, setClickJudge) => {
    // ボタンを無効にする
    playerNum.disabled = true;
    resultMessage.textContent = '結果はどうなる？？';

    // サイコロの目をランダムで設定
    const funcTimer = setInterval(() => {
        const randomNum = Math.floor(Math.random() * 6 + 1);
        const resultImgSrc = `./img/saikoro${randomNum}.png`;
        setDiceImg.setAttribute('src', resultImgSrc);
        // クリックしたのがplayer1Btnだったら
        if (playerNum === player1Btn) {
            // 生成されたランダム数をrandomNum1に格納して後の大小比較に使用
            randomNum1 = randomNum;
            // クリックしたのがplayer2Btnだったら
        } else {
            // 生成されたランダム数をrandomNum2に格納して後の大小比較に使用
            randomNum2 = randomNum;
        }
    }, 50);

    // 2秒後にサイコロを止める
    setTimeout(() => {
        clearInterval(funcTimer);
        const clickJudgeChange = setClickJudge;
        clickJudgeChange(true);
        // 両方のプレイヤーがサイコロを止めたら結果を表示
        if (clickJudge1 && clickJudge2) {
            if (randomNum1 > randomNum2) {
                resultMessage.textContent = 'player1の勝ち';
            } else if (randomNum2 > randomNum1) {
                resultMessage.textContent = 'player2の勝ち';
            } else {
                resultMessage.textContent = '引き分け';
            }

            // ボタンを有効に戻す
            player1Btn.disabled = false;
            player2Btn.disabled = false;

            // クリック状態をリセット
            clickJudge1 = false;
            clickJudge2 = false;
        }
    }, 2000);
};

// プレイヤー1と2のボタンにイベントリスナーを追加
player1Btn.addEventListener('click', () =>
    rollDice(player1Btn, setPlayer1dice, (val) => {
        clickJudge1 = val;
    })
);
player2Btn.addEventListener('click', () =>
    rollDice(player2Btn, setPlayer2dice, (val) => {
        clickJudge2 = val;
    })
);
