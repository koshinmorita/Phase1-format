// const button = document.querySelector('button');
// const countNum = document.querySelector('#rewriteNum');

// let i = 0;
// countNum.innerHTML = i;

// button.addEventListener('click', () => {
//     i += 1;
//     if (i % 3 === 0 && i % 5 === 0) {
//         countNum.innerHTML = 'fizzbuzz';
//     } else if (i % 3 === 0) {
//         countNum.innerHTML = 'fizz';
//     } else if (i % 5 === 0) {
//         countNum.innerHTML = 'buzz';
//     } else {
//         countNum.innerHTML = i;
//     }
// });

const showNum = document.querySelector('#showNum');
const fizzBtn = document.querySelector('#fizzBtn');
const buzzBtn = document.querySelector('#buzzBtn');
const fizzbuzzBtn = document.querySelector('#fizzbuzzBtn');
const numBtn = document.querySelector('#numBtn');

let i = 0;
showNum.innerHTML = i;

fizzBtn.addEventListener('click', () => {
    i += 1;
    console.log(i);
    if (i % 3 === 0) {
        showNum.innerHTML = 'fizz';
    } else {
        alert('ぶっぶーですわ');
        i = 0;
        showNum.innerHTML = i;
    }
});

buzzBtn.addEventListener('click', () => {
    i += 1;
    console.log(i);
    if (i % 5 === 0) {
        showNum.innerHTML = 'buzz';
    } else {
        alert('ぶっぶーですわ');
        i = 0;
        showNum.innerHTML = i;
    }
});

fizzbuzzBtn.addEventListener('click', () => {
    i += 1;
    console.log(i);
    if (i % 3 === 0 && i % 5 === 0) {
        showNum.innerHTML = 'fizzbuzz';
    } else {
        alert('ぶっぶーですわ');
        i = 0;
        showNum.innerHTML = i;
    }
});

numBtn.addEventListener('click', () => {
    i += 1;
    console.log(i);
    if (i % 3 === 0 || i % 5 === 0) {
        alert('ぶっぶーですわ');
        i = 0;
        showNum.innerHTML = 0;
    } else {
        showNum.innerHTML = i;
    }
});
