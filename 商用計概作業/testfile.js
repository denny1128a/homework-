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