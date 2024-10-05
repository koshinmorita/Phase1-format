const nowPassword = document.querySelector('#nowPassword');
const confirmPassword = document.querySelector('#confirmPassword');
const newPassword = document.querySelector('#newPassword');
const setPassword = document.querySelector('#setPassword');

const reset = () => {
    confirmPassword.value = '';
    newPassword.value = '';
};

// const regex = /^\d{3}-\d{4}$/;
const regex = /(.)\1/;

// パスワードの履歴を保存する配列
let passwordHistory = ['aaaaa'];
nowPassword.innerHTML = `現在のパスワードは${
    passwordHistory[passwordHistory.length - 1]
}`;

checkFunc = () => {
    const inputtedCurrentPassword = confirmPassword.value;
    const inputtedNewPassword = newPassword.value;
    const currentPassword = passwordHistory[passwordHistory.length - 1];

    console.log(inputtedCurrentPassword);
    if (inputtedCurrentPassword !== currentPassword) {
        alert('現在のパスワードが間違ってるよ！');
        reset();
    } else if (inputtedNewPassword === inputtedCurrentPassword) {
        alert('新しいパスワードは現在のパスワードと違うものにしてね！');
        reset();
    } else if (passwordHistory.includes(inputtedNewPassword)) {
        alert('過去に使ったパスワードは設定できないよ！');
        reset();
    } else if (regex.test(inputtedNewPassword)) {
        alert('同じ文字が連続しているパスワードは使えません！');
        reset();
    } else {
        // 新しいパスワードを履歴に追加
        passwordHistory.push(inputtedNewPassword);
        alert(`新しいパスワードは${inputtedNewPassword}です！`);
        nowPassword.innerHTML = `現在のパスワードは${inputtedNewPassword}`;
        reset();
    }
};

setPassword.addEventListener('click', checkFunc);
