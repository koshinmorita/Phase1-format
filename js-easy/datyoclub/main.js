// let countNum = 0;
// const cntUp = () => {
//     countNum += 1;
// };

// const word = 'どうぞどうぞ';
// const reply = () => {
//     alert(word.repeat(countNum));
//     countNum = 0;
// };

let countNum = 3;
const button = document.querySelector('button');
button.innerHTML = 3;

const cntDown = () => {
    countNum -= 1;
    button.innerHTML = countNum;
    if (countNum === 0) {
        alert('そして誰もいなくなった');
        countNum = 3;
        button.innerHTML = 3;
    }
};
