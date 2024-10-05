const nowPassword = document.querySelector('#nowPassword');
const confirmPassword = document.querySelector('#confirmPassword');
const newPassword = document.querySelector('#newPassword');
const setPassword = document.querySelector('#setPassword');

const reset = () => {
    confirmPassword.value = '';
    newPassword.value = '';
};

let password = 'aaaaa';
nowPassword.innerHTML = `現在のパスワードは${password}`;

checkFunc = () => {
    const inputtedCurrentPassword = confirmPassword.value;
    const inputtedNewPassword = newPassword.value;
    console.log(inputtedCurrentPassword);
    if (inputtedCurrentPassword !== password) {
        alert('現在のパスワードが間違ってるよ！');
        reset();
    } else if (inputtedNewPassword === password) {
        alert('同じパスワードは使えないよ！');
        reset();
    } else if (inputtedNewPassword === inputtedCurrentPassword) {
        alert('新しいパスワードは現在のパスワードと違うものにしてね！');
        reset();
    } else if (inputtedNewPassword.length < 8) {
        alert('新しいパスワードは8桁以上にしてね！');
        reset();
    } else {
        password = inputtedNewPassword;
        alert(`新しいパスワードは${password}です！`);
        nowPassword.innerHTML = `現在のパスワードは${password}`;
        reset();
    }
};

setPassword.addEventListener('click', checkFunc);
