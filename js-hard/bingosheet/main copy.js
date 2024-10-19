const setButton = document.getElementById('hitNum');

const eachColRange = [
    { min: 1, max: 15 },
    { min: 16, max: 30 },
    { min: 31, max: 45 },
    { min: 46, max: 60 },
    { min: 61, max: 75 },
];

// const sampleArray = [
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
//     [11, 12, 13, 14, 15],
// ];

// const flattendArray = sampleArray.flat();

// console.log(flattendArray.includes(16));

const createEachColNums = (min, max) => {
    const createdEachArray = [];
    while (createdEachArray.length < 5) {
        const createdRandomNum = Math.floor(
            Math.random() * (max - min + 1) + min
        );
        if (!createdEachArray.includes(createdRandomNum)) {
            createdEachArray.push(createdRandomNum);
        }
    }
    return createdEachArray;
};

let eachColNums = [];

const createBingoSheet = () => {
    const table = document.getElementById('view');

    setButton.innerText = '何番が出るかな？？';
    if (table.childElementCount === 0) {
        for (let i = 0; i < eachColRange.length; i++) {
            const bingoNums = createEachColNums(
                eachColRange[i].min,
                eachColRange[i].max
            );
            eachColNums.push(bingoNums);
        }

        // 真ん中を「FREE」に上書き
        eachColNums[2][2] = 'FREE';

        // 新たな数字を生成するわけではなく、eachColuNumsに格納されている配列を順番に表示していくだけ
        for (let r = 0; r < 5; r++) {
            const tr = document.createElement('tr');
            for (let c = 0; c < 5; c++) {
                const td = document.createElement('td');
                td.innerHTML = eachColNums[c][r]; //[2][2]にはfreeが格納されている。それが表示される。
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }

        const freeTd = Array.from(table.getElementsByTagName('td')).find(
            (td) => td.textContent === 'FREE'
        );
        if (freeTd) {
            freeTd.style.backgroundColor = 'yellow'; // 好きな色に変更
        }
    } else {
        const hitNum = Math.floor(Math.random() * 75 + 1);
        alert(`数字は${hitNum}です！`);

        const hitNumTd = Array.from(table.getElementsByTagName('td')).find(
            (td) => td.textContent == hitNum
        );
        if (hitNumTd) {
            hitNumTd.style.backgroundColor = 'yellow'; // 好きな色に変更
        }
    }
};

setButton.addEventListener('click', createBingoSheet);
