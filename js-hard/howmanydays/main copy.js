const dateSet = document.querySelector('#dateSet');
const dateSearch = document.querySelector('#dateSearch');
const timeStr = document.createElement('p');
const body = document.querySelector('body');
body.appendChild(timeStr);

let targetDate;

dateSearch.addEventListener('click', () => {
    targetDate = moment(dateSet.value);

    // カウントダウンを1秒ごとに更新する
    const interval = setInterval(() => {
        const now = moment(); // 現在の日時
        const diff = targetDate.diff(now); // 現在時刻との差（ミリ秒単位）

        if (diff <= 0) {
            // カウントダウン終了
            clearInterval(interval);
            document.getElementById('countdown').innerText =
                'カウントダウン終了！';
        } else {
            // 差分を日、時間、分、秒に変換
            const duration = moment.duration(diff);
            const years = duration.years();
            const months = duration.months();
            const days = duration.days();
            const hours = duration.hours();
            const minutes = duration.minutes();
            const seconds = duration.seconds();

            // カウントダウンを表示
            timeStr.innerHTML = `ドラえもんが生まれるまで後${years}年 ${months}か月 ${days}日 ${hours}時間 ${minutes}分 ${seconds}秒`;
        }
    }, 1000); // 1秒ごとに更新
});
