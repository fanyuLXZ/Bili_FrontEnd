/**
 * @desc 格式化日期字符串
 * @param { Nubmer} - 时间戳
 * @returns { String } 格式化后的日期字符串
 */
export function formatDate(timestamp) {
    // 补全为13位
    let arrTimestamp = (timestamp + '').split('');
    for (let start = 0; start < 13; start++) {
        if (!arrTimestamp[start]) {
            arrTimestamp[start] = '0';
        }
    }
    timestamp = arrTimestamp.join('') * 1;
    let minute = 1000 * 60;
    let hour = minute * 60;
    let day = hour * 24;
    let month = day * 30;
    let now = new Date().getTime();
    let diffValue = now - timestamp;

    // 计算差异时间的量级
    let monthC = diffValue / month;
    let weekC = diffValue / (7 * day);
    let dayC = diffValue / day;
    // 数值补0方法
    let zero = function (value) {
        if (value < 10) {
            return '0' + value;
        }
        return value;
    };
    // 使用
    if (monthC > 4) {
        // 超过1年，直接显示年月日
        return (function () {
            let date = new Date(timestamp);
            return date.getFullYear() + '年' + zero(date.getMonth() + 1) + '月';
        })();
    } else if (monthC >= 1) {
        return parseInt(monthC) + '月前';
    } else if (weekC === 1 && dayC <= 7) {
        return  '近一周';
    } else if (weekC >= 1) {
        return '1周前';
    } else if (dayC === 1) {
        return '昨天';
    }
    return '今天';
}
