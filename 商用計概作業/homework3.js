//(1)寫一個遞迴函式用來計算費氏數列中的第n項。
window.alert("第一題,寫一個遞迴函式用來計算費式數列中的第n項。");
var n = parseInt(window.prompt("請輸入需要的費式序列第 n 項："));
// 定義遞迴函式來計算費氏數列中的第 n 項
function fibonacci(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
if (isNaN(n) || n < 0) {
    window.alert("請輸入一個有效的正整數！");//驗證有效輸入
} else {
    var result = fibonacci(n);//定義
    window.alert("費波那契數列中的第 " + n + " 項是：" + result);
}

//(2)寫一個遞迴函式用來計算兩個正整數的最大公因數(GCD)。
window.alert("第二題,寫一個遞迴函式用來計算兩個正整數的最大公因數(GCD)。");
var a = parseInt(window.prompt("請輸入第一個正整數："));
var b = parseInt(window.prompt("請輸入第二個正整數："));
//計算最大公因數
function gcd(a, b) {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}
if (isNaN(a) || a <= 0 || isNaN(b) || b <= 0) {
    window.alert("請輸入有效的正整數！");}//驗證輸入
    else {var result = gcd(a, b);}

window.alert("最大公因數 (GCD) 是：" + result);