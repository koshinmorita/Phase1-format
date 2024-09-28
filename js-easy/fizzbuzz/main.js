let i = 0;
const showNum = document.getElementById('showNum');
showNum.innerHTML = i;

const fizzBtn = () => {
    i += 1;
    if (i % 3 === 0) {
        showNum.innerHTML = 'fizz';
    } else {
        alert('ぶっぶーですわ');
        location.reload();
    }
};

const buzzBtn = () => {
    i += 1;
    if (i % 5 === 0) {
        showNum.innerHTML = 'buzz';
    } else {
        alert('ぶっぶーですわ');
        location.reload();
    }
};

const fizzbuzzBtn = () => {
    i += 1;
    if (i % 3 === 0 && i % 5 === 0) {
        showNum.innerHTML = 'fizzbuzz';
    } else {
        alert('ぶっぶーですわ');
        location.reload();
    }
};

const numBtn = () => {
    i += 1;
    if (i % 3 === 0 || i % 5 === 0) {
        alert('ぶっぶーですわ');
        location.reload();
    }
    showNum.innerHTML = i;
};
