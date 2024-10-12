// カウントダウンの終了日時を設定（例：2024年12月31日 23:59:59）
const targetDate = moment('2124-12-31 23:59:59');
const timeStr = document.createElement('p');
const body = document.querySelector('body');

// カウントダウンを1秒ごとに更新する
const intervalId = setInterval(() => {
    const now = moment(); // 現在の日時
    const diff = targetDate.diff(now); // 現在時刻との差（ミリ秒単位）
    body.appendChild(timeStr);
    if (diff <= 0) {
        // カウントダウン終了
        clearInterval(intervalId);
        document.getElementById('countdown').innerText = 'カウントダウン終了！';
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
        timeStr.innerHTML = `ドラえもんが生まれるまで後：${years}年 ${months}か月 ${days}日 ${hours}時間 ${minutes}分 ${seconds}秒`;
    }
}, 1000); // 1秒ごとに更新
