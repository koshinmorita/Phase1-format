const setBtn = document.querySelector('#setBtn');
setBtn.addEventListener('click', () => {
    const randomNum = Math.floor(Math.random() * 9 + 1);
    console.log(randomNum);
    if (randomNum < 5) {
        const result = confirm('ぺっぺっぺー');
        if (result === true) {
            alert('ぺっぺっぺー');
        } else {
            alert('斎藤さんだぞ！');
        }
    } else {
        const result = confirm('斎藤さんだぞ！');
        if (result === true) {
            alert('斎藤さんだぞ！');
        } else {
            alert('ぺっぺっぺー');
        }
    }
});
