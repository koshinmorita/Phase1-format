// 各要素を定数へ格納
const player1Btn = document.querySelector('#player1Btn');
const player2Btn = document.querySelector('#player2Btn');
let result = document.querySelector('#result');
const player1diceImage = document.querySelector('#setPlayer1dice');
const player2diceImage = document.querySelector('#setPlayer2dice');

// ローカルスコープを跨いで使用するため変数へ格納
let randomNum;
let compareNum1;
let compareNum2;

// プレイヤーのデータをまとめた配列
const players = [
    {
        btn: player1Btn,
        diceImage: player1diceImage,
        clickJudge: false,
    },
    {
        btn: player2Btn,
        diceImage: player2diceImage,
        clickJudge: false,
    },
];

// サイコロ画像の初期設定
let diceImageSrc = './img/saikoro1.png';
players.forEach((player) => {
    player.diceImage.setAttribute('src', diceImageSrc);
});

const rollDice = (setPlayer) => {
    setPlayer.btn.disabled = true;

    if (players[0].btn.disabled === true && players[1].btn.disabled === false) {
        result.textContent = 'プレイヤー2を待ってるよ';
    } else if (
        players[0].btn.disabled === false &&
        players[1].btn.disabled === true
    ) {
        result.textContent = 'プレイヤー1を待ってるよ';
    } else {
        result.textContent = 'どっちが勝つかな？';
    }

    const rollDiceTimer = setInterval(() => {
        randomNum = Math.floor(Math.random() * 6 + 1);
        const randomDiceImage = `./img/saikoro${randomNum}.png`;
        setPlayer.diceImage.setAttribute('src', randomDiceImage);
    }, 50);

    setTimeout(() => {
        setPlayer.clickJudge = true;
        // console.log(setJudge);
        clearInterval(rollDiceTimer);
        if (setPlayer.btn === player1Btn) {
            compareNum1 = randomNum;
            // console.log(compareNum1);
        } else {
            compareNum2 = randomNum;
            // console.log(compareNum2);
        }

        // console.log(players[0].clickJudge);
        if (players[0].clickJudge === true && players[1].clickJudge === true) {
            if (compareNum1 > compareNum2) {
                result.textContent = 'プレイヤー1の勝ちです！';
            } else if (compareNum2 > compareNum1) {
                result.textContent = 'プレイヤー2の勝ちです！';
            } else {
                result.textContent = '引き分けだよ！';
            }
            resetGame();
        }
    }, 3000);
};

const resetGame = () => {
    players.forEach((player) => {
        player.btn.disabled = false;
        player.clickJudge = false;
    });
};

// 各プレイヤーのボタンにイベントリスナーを追加
players.forEach((player) => {
    player.btn.addEventListener('click', () => rollDice(player));
});
