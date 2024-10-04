const sampleForm = document.querySelector('#sampleForm');
const textCounter = document.querySelector('#textCounter');
const resetBtn = document.querySelector('#resetBtn');

let inputNum;
const maxNum = 400;

textCounter.textContent = `あと${maxNum}文字打てるよ`;

const result = () => {
    inputNum = sampleForm.value.length;
    let leftNum = maxNum - inputNum; // keyupイベント内で計算する
    textCounter.textContent = `あと${leftNum}文字打てるよ`;
};

sampleForm.addEventListener('keyup', () => {
    result();
});

resetBtn.addEventListener('click', () => {
    sampleForm.value = '';
    textCounter.textContent = `あと${maxNum}文字打てるよ`; // 文字数表示をリセット
});

const iniDel = document.querySelector('#iniDel');
const endDel = document.querySelector('#endDel');

const delFunc = (clickedDel) => {
    let currentValue = sampleForm.value; // 現在の値を取得
    console.log(clickedDel);
    if (currentValue.length > 0) {
        if (clickedDel === iniDel) {
            sampleForm.value = currentValue.slice(1); // 最初の文字を削除
        } else if (clickedDel === endDel) {
            sampleForm.value = currentValue.slice(0, -1); // 最後の文字を削除
        }
        result(); // 削除後に結果を反映
    }
};

// 関数の参照を正しく渡すため、無名関数を使ってクリック時に正しい引数を渡す
[iniDel, endDel].forEach((delBtn) => {
    delBtn.addEventListener('click', () => delFunc(delBtn));
});
