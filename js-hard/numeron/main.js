const answerNum = document.querySelector('#answerNum');
const numCheck = document.querySelector('#numCheck');
const remainTurn = document.querySelector('#remainTurn');

let randomNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const cpNumbers = [{ number: null }, { number: null }, { number: null }];

const inputNumbers = [{ number: null }, { number: null }, { number: null }];

const reset = () => {
    answerNum.value = '';
    randomNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
};

for (let i = 0; i < 3; i++) {
    let randomIndex = Math.floor(Math.random() * randomNumbers.length);
    cpNumbers[i].number = randomNumbers.splice(randomIndex, 1)[0];
    console.log(cpNumbers[i].number);
}

const checkInput = () => {
    const inputNum = answerNum.value;

    // 3桁の数字かどうかを正規表現でチェック
    if (!/^\d{3}$/.test(inputNum)) {
        alert('3桁の数字を入力してください');
        reset();
        return;
    }

    // 同じ数字が複数回使われているかをチェックする
    if (/(\d)\1/.test(inputNum)) {
        alert('同じ数字が含まれています！');
        reset();
        return;
    }

    // 入力された数字を配列に変換
    let inputArray = inputNum.split('').map(Number); // [1, 2, 3]

    // プレイヤーの入力をinputNumbersに格納
    for (let i = 0; i < 3; i++) {
        inputNumbers[i].number = inputArray[i];
    }

    // EATとBITEのカウント
    let eatCount = 0;
    let biteCount = 0;

    // EATの判定（数字と位置が一致）
    for (let i = 0; i < cpNumbers.length; i++) {
        if (inputNumbers[i].number === cpNumbers[i].number) {
            eatCount++;
        }
    }

    // BITEの判定（数字が一致するが位置が違う）
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (i !== j && inputNumbers[i].number === cpNumbers[j].number) {
                biteCount++;
            }
        }
    }

    // 結果を表示
    alert(`${eatCount} EAT, ${biteCount} BITE`);

    // ゲーム終了判定（3 EATなら勝利）
    if (eatCount === 3) {
        alert('勝利！');
        reset();
    }
};

numCheck.addEventListener('click', checkInput);
