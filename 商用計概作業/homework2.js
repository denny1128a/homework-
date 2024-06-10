

//(1）提示使用者輪人一個年份，判斷這個年份是否為閏年。若這個年份能被4整除但不能被 100整除，或者能被 400 整除，就是閏年，否則不是閏年。
window.alert("第一題，提示使用者輪人一個年份，判斷這個年份是否為閏年。若這個年份能被4整除但不能被 100整除，或者能被 400 整除，就是閏年，否則不是閏年。");
var year = window.prompt("請輸入年份", "");
    function isLeapYear(){
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            return true;
        } else {
            return false;
        }
    }
    if (isLeapYear(year)) {
        console.log(year + " 是閏年");
        alert(year + " 是閏年");
    } else {
        console.log(year + " 不是閏年");
        alert(year + " 不是閏年");
    }
//(2）提示使用者輸入一個月份，然後輸出這個月份所對應的天數。若輸人的是 1、3、5、7、8、10或12月，就輸出「31天」；著輸人的是4、6、9或11月，就輸出「30天」；若輸入的是2月，就輸出 「28天」或「29天」，需要考慮閏年的情況。
window.alert("第二題，提示使用者輸入一個月份，然後輸出這個月份所對應的天數。若輸人的是 1、3、5、7、8、10或12月，就輸出「31天」；著輸人的是4、6、9或11月，就輸出「30天」；若輸入的是2月，就輸出 「28天」或「29天」，需要考慮閏年的情況。");

var month = parseInt(window.prompt("請輸入一個月份（1-12）："));
var year = parseInt(window.prompt("請輸入一個年份："));
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
function getDaysInMonth(month, year) {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        case 2:
            return isLeapYear(year) ? 29 : 28;
        default:
            return "無效的月份";
    }
}

// 獲取並輸出該月份的天數
var days = getDaysInMonth(month, year);
if (typeof days === "number") {
    console.log(month + "月有 " + days + " 天");
    alert(month + "月有 " + days + " 天");
} else {
    console.log(days);
    alert(days);
}

//(3） 提示使用者輸人一個宇串，然後使用 for 迥圈將宇串反轉。
window.alert("第三題,提示使用者輸人一個宇串，然後使用 for 迥圈將宇串反轉。");
var inputString = window.prompt("請輸入一個字串：");
//反轉
var reversedString = "";
for (var i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString[i];
}
window.alert("反轉後的字串：" + reversedString);

//（4） 使用for 迴圈印出由" * "組成的倒直角三角形。
window.alert("第四題,使用for 迴圈印出由 * 組成的倒直角三角形。");
var layers = parseInt(window.prompt("請輸入倒直角三角形的層數："));
if (isNaN(layers) || layers <= 0) {
    window.alert("請輸入正整數！");
} else {
    // 使用 for 迴圈來生成並打印倒直角三角形
    var triangle = "";
    for (var i = layers; i > 0; i--) {
        var row = '';
        for (var j = 0; j < i; j++) {
            row += "*";
        }
        triangle += row + "\n";
    }
    window.alert(triangle);
}

//（5）使用 while 迴圈判斷一個數是否為質數。
window.alert("第五題,使用 while 迴圈判斷一個數是否為質數。");
var number = parseInt(window.prompt("請輸入一個數字："));

// 驗證輸入是否為整數
if (isNaN(number)) {
    window.alert("請輸入一個有效的數字！");
} else {
    var isPrime = true;
    var divisor = 2;

    // 使用 while 迴圈進行質數判斷
    while (divisor <= Math.sqrt(Math.abs(number))) {
        if (number % divisor === 0) {
            isPrime = false;
            break;
        }
        divisor++;
    }

    // 根據判斷結果輸出
    if (isPrime && number > 1) {
        window.alert(number + " 是質數！");
    } else {
        window.alert(number + " 不是質數！");
    }
}

//（6）使用while 迴圈印出由" * "組成的倒直角三角形。
window.alert("第六題,使用while 迴圈印出由 * 組成的倒直角三角形。");
var layers1 = parseInt(window.prompt("請輸入倒直角三角形的層數："));
if (isNaN(layers1) || layers1 <= 0) {
    window.alert("請輸入一個有效的正整數！");
} else {
    var i = layers1;
    var triangle1 = "";
    while (i > 0) {
        var row1 = "";
        var j = i;
        while (j > 0) {
            row1 += "*";
            j--;
        }
        triangle1 += row1 + "\n";
        i--;
    }
    window.alert(triangle1);
}
//（7）輸人一個正整數n，使用 do...while 迥圈計算n！的值（即 n 的階乘），輸出結果。
window.alert("第七題,輸人一個正整數n，使用 do...while 迥圈計算n！的值（即 n 的階乘），輸出結果。");
var n = parseInt(window.prompt("請輸入一個正整數："));
if (isNaN(n) || n <= 0) {
    window.alert("請輸入正整數！");
} else {
    var factorial = 1;
    var i = n;

    // 使用 do...while 迴圈計算階乘
    do {
        factorial *= i;
        i--;
    } while (i > 0);

    // 輸出結果
    window.alert(n + " 的階乘是：" + factorial);
}

//(8） 使用for..of迴閻找出陣列中的最大值，假設陣列為 【1，5，2，7，3]。
window.alert("第八題,使用for..of迴閻找出陣列中的最大值，假設陣列為 【1，5，2，7，3]。");
// 定義陣列
var arr = [1, 5, 2, 7, 3];

// 初始化最大值為陣列中的第一個元素
var max = arr[0];

// 使用 for...of 迴圈找出陣列中的最大值
for (var num of arr) {
    if (num > max) {
        max = num;
    }
}
window.alert("陣列中的最大值是：" + max);

//(9） 使用for..of迴圈計算陣列中所有偶數元素的總和，假設陣列為[1,2,3,4,5,6,7,8]。
window.alert("第九題,使用for..of迴圈計算陣列中所有偶數元素的總和，假設陣列為[1,2,3,4,5,6,7,8]。");
var arr1 = [1,2,3,4,5,6,7,8];
var sum = 0;
for (var num of arr1) {
    if (num % 2 === 0) {
        sum += num;
    }
}
window.alert("陣列中所有偶數元素的和式:"+sum);

//(10） 使用for.in 週圈計算物件中屬性值的總和，假設物件為[a:1, b:2, c:3, d:4, e:5]。
window.alert("第十題,使用for.in 週圈計算物件中屬性值的總和，假設物件為[a:1, b:2, c:3, d:4, e:5]。");
var obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
var sum1 = 0;
for(var key in obj){
    if(obj.hasOwnProperty(key)){
        sum1 += obj[key];
    }
}
window.alert("物件中所有屬性值的總和是：" + sum1);