const setBtn = () => {
    const randumNum = Math.floor(Math.random() * 10);
    console.log(randumNum);
    if (randumNum < 5) {
        const result = confirm('ぺっぺっぺー');
        if (result === true) {
            alert('ぺっぺっぺー');
        } else {
            alert('斎藤さんだぞ？');
        }
    } else {
        const result = confirm('斎藤さんだぞ？');
        if (result === true) {
            alert('斎藤さんだぞ？');
        } else {
            alert('ぷっぷっぷー');
        }
    }
    // randumNum < 5 ? alert('ぺっぺっぺー') : alert('斎藤さんだぞ？');
};
