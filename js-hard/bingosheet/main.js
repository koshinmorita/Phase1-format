// ビンゴの列ごとの範囲
const numberRanges = [
    { min: 1, max: 15 }, // B列
    { min: 16, max: 30 }, // I列
    { min: 31, max: 45 }, // N列
    { min: 46, max: 60 }, // G列
    { min: 61, max: 75 }, // O列
];

// 各列からランダムな数字を5つ生成
function generateColumnNumbers(min, max) {
    const numbers = [];
    while (numbers.length < 5) {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        // 生成された数字が重複しないよう、!とincludesでフィルターをかける
        if (!numbers.includes(randomNum)) {
            numbers.push(randomNum);
        }
    }
    // 関数の呼び出し元に帰り、bingoNumbersへ格納される
    console.log(numbers);
    return numbers;
}

// ビンゴシートを生成する関数
function createBingoSheet() {
    const table = document.getElementById('view');
    table.innerHTML = ''; // 既存のビンゴをクリア

    // 列の5数字(colNumbers)を格納するための配列初期化
    // この数字が実際に表示（ゲームで使用）される。
    let bingoNumbers = [];

    // 各列ごとに数字を生成
    for (let i = 0; i < numberRanges.length; i++) {
        const colNumbers = generateColumnNumbers(
            numberRanges[i].min,
            numberRanges[i].max
        );
        bingoNumbers.push(colNumbers);
        // console.log(bingoNumbers);
    }

    // 真ん中を「FREE」に設定（N列の3番目）
    bingoNumbers[2][2] = 'FREE';

    // 5x5のグリッドを作成
    for (let r = 0; r < 5; r++) {
        const row = document.createElement('tr');

        for (let c = 0; c < 5; c++) {
            const cell = document.createElement('td');
            cell.textContent = bingoNumbers[c][r]; // 列に対応する数字を表示
            // console.log(bingoNumbers[c][r]);
            row.appendChild(cell);
        }

        table.appendChild(row); // テーブルに行を追加
    }
}

// 「セット」ボタンがクリックされたときにビンゴシートを生成
document.getElementById('hitNum').addEventListener('click', createBingoSheet);
