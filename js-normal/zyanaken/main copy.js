const myHand = document.querySelector('#myHand');
const cpHand = document.querySelector('#cpHand');
const gameStart = document.querySelector('#gameStart');
const result = document.querySelector('#log');

cpHand.textContent = '相手の手：';
result.textContent = '結果：';

const reset = () => {
    myHand.value = 0;
    cpHand.textContent = '相手の手：';
    result.textContent = '結果：';
};

const startFunc = () => {
    let myChoiceNum = myHand.value;
    myChoiceNum = parseInt(myChoiceNum);
    // console.log(myChoiceNum);
    const cpRandomNum = Math.floor(Math.random() * 3);
    console.log(cpRandomNum);
    if (cpRandomNum === 0) {
        cpHand.textContent = '相手の手：グー';
        if (myChoiceNum === 0) {
            result.textContent = '結果：引き分け';
        } else if (myChoiceNum === 1) {
            result.textContent = '結果：負け';
        } else if (myChoiceNum === 2) {
            result.textContent = '結果：勝ち';
        }
    } else if (cpRandomNum === 1) {
        cpHand.textContent = '相手の手：チョキ';
        if (myChoiceNum === 0) {
            result.textContent = '結果：勝ち';
        } else if (myChoiceNum === 1) {
            result.textContent = '結果：引き分け';
        } else if (myChoiceNum === 2) {
            result.textContent = '結果：負け';
        }
    } else if (cpRandomNum === 2) {
        cpHand.textContent = '相手の手：パー';
        if (myChoiceNum === 0) {
            result.textContent = '結果：負け';
        } else if (myChoiceNum === 1) {
            result.textContent = '結果：勝ち';
        } else if (myChoiceNum === 2) {
            result.textContent = '結果：引き分け';
        }
    }
};

gameStart.addEventListener('click', startFunc);
