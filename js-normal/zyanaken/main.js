const player = document.querySelector('#player');
const playerHand = document.querySelector('#playerHand');
const player1Hand = document.querySelector('#player1Hand');
const player2Hand = document.querySelector('#player2Hand');
const setHand = document.querySelector('#setHand');
const gameStart = document.querySelector('#gameStart');
const result = document.querySelector('#log');
result.textContent = '結果：';

let turn = 0;
let player1Num;
let player2Num;

const reset = () => {
    setTimeout(() => {
        player.textContent = 'player1';
        playerHand.value = 0;
        player1Hand.textContent = 'player1:';
        player2Hand.textContent = 'player2:';
        setHand.disabled = false;
        result.textContent = '結果：';
        turn = 0;
    }, 3000);
};

const setFunc = () => {
  let playerHandNum = parseInt(playerHand.value); // フォームの値を再取得し、整数に変換
    if (turn === 0) {
        player1Num = playerHandNum;
        player.textContent = 'player2';
        player1Hand.textContent = 'player1:セット完了';
        turn += 1;
        playerHand.value = 0;
    } else if (turn === 1) {
        player2Num = playerHandNum;
        player.textContent = '両者セット完了';
        player2Hand.textContent = 'player2:セット完了';
        setHand.disabled = true;
    }
};

const judgeFunc = () => {
    if (setHand.disabled) {
        if (player1Num === 0) {
            if (player2Num === 0) {
                result.textContent = '結果：引き分け';
            } else if (player2Num === 1) {
                result.textContent = '結果：Player1の勝ち';
            } else if (player2Num === 2) {
                result.textContent = '結果：Player2の勝ち';
            }
        } else if (player1Num === 1) {
            if (player2Num === 0) {
                result.textContent = '結果：Player2の勝ち';
            } else if (player2Num === 1) {
                result.textContent = '結果：引き分け';
            } else if (player2Num === 2) {
                result.textContent = '結果：Player1の勝ち';
            }
        } else if (player1Num === 2) {
            if (player2Num === 0) {
                result.textContent = '結果：Player1の勝ち';
            } else if (player2Num === 1) {
                result.textContent = '結果：Player2の勝ち';
            } else if (player2Num === 2) {
                result.textContent = '結果：引き分け';
            }
        }
        reset();
    } else {
        result.textContent = 'グー、チョキ、パーのいずれかをセットしてね。';
    }
};

setHand.addEventListener('click', setFunc);
gameStart.addEventListener('click', judgeFunc);
