//(1)寫一個函式用來生成一個指定長度的隨機字串。
window.alert("第一題,寫一個函式用來生成一個指定長度的隨機字串。");
// 定義函式用來生成指定長度的隨機字串
function generateRandomString(length) {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var randomString = '';
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters[randomIndex];
    }
    return randomString;
}

var length = parseInt(window.prompt("請輸入隨機字串的長度："));

// 驗證輸入是否有效
if (isNaN(length) || length <= 0) {
    window.alert("請輸入一個有效的正整數！");
} else {
    var result = generateRandomString(length);
    window.alert("生成的隨機字串是：" + result);
}


//(2)寫一個函式用來判斷一個數字是否為完美數。
window.alert("第二題,寫一個函式用來判斷一個數字是否為完美數。");
var num = parseInt(window.prompt("請輸入一個數字來判斷是否為完美數："));
// 定義函式用來判斷一個數字是否為完美數
function isPerfectNumber(num) {
    // 負數和零不可能是完美數
    if (num <= 0) {
        return false;
    }
    var sum = 0;
    // 找出所有的真因數並求和
    for (var i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    // 判斷真因數之和是否等於該數
    return sum === num;
}
if (isNaN(num)) {
    window.alert("請輸入一個有效的數字！");
} else {
    var result = isPerfectNumber(num);
    // 輸出結果
    if (result) {
        window.alert(num + " 是一個完美數。");
    } else {
        window.alert(num + " 不是一個完美數。");
    }
}

//(3)寫一個函式用來進行氣泡排序法。
window.alert("第三題,寫一個函式用來進行氣泡排序法。");
var input = window.prompt("請輸入一組數字，以空格分隔：");//輸入
//生成陣列
var arr = input.split(" ").map(function(num) {
    return parseInt(num);
});
// 定義函式進行氣泡排序法
function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // 交換兩個元素的位置
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
var isValid = arr.every(function(num) {
    return !isNaN(num);
});

if (!isValid) {
    window.alert("請輸入有效的數字！");
} else {
    // 使用氣泡排序對數字陣列進行排序
    var sortedArr = bubbleSort(arr);
    window.alert("氣泡排序後的陣列：" + sortedArr);
}