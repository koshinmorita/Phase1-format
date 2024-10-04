// const cntUp = document.querySelector('#cntUp');
// const reply = document.querySelector('#reply');

// let cntNum = 0;
// cntUp.addEventListener('click', () => {
//     cntNum += 1;
//     console.log(cntNum);
// });

// reply.addEventListener('click', () => {
//     const str = 'どうぞどうぞ';
//     const action = str.repeat(cntNum);
//     alert(action);
//     cntNum = 0;
// });

const cntDown = document.querySelector('#cntDown');
const reply = document.querySelector('#reply');

let cntNum = 3;
cntDown.addEventListener('click', () => {
    cntNum -= 1;
    console.log(cntNum);
    if (cntNum <= 0) {
        alert('もう誰もいない・・・');
        cntNum = 5;
    }
});
