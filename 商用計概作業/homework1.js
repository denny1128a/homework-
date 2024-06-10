//第一題 計算2的10次方
var result = 2 ** 10;
console.log(result);

//第二題 計算100除以7的商和餘數
var dividend = 100;
var divisor = 7;

var quotient = Math.floor(dividend / divisor); // 計算商
var remainder = dividend % divisor; // 計算餘數

console.log("商:", quotient);
console.log("餘數:", remainder);

//第三題 計算10除以3的結果,保留2位小數
var result = 10 / 3;
result = result.toFixed(2); // 保留2位小數

console.log(result); 

//第四題 將字串 "5" 轉換成數值型別,然後加上10
var str = "5";
var num = parseInt(str); // 將字符串轉換為整數
var result = num + 10;

console.log(result); 

//第五題 計算圓形面積,半徑為7
var radius = 7; 
var area = Math.PI * radius * radius;

console.log(area); 

//第六題 將字串"hello"與字串"world"連接起來
var str1 = "hello";
var str2 = "world";
var result = str1 + str2;

console.log(result); 

//第七題 計算數字123的個位數字
var number = 123;
var digit = number % 10;

console.log(digit);

//第八題 將數字4轉換成字串型別 然後連接上字串2
var number = 4;
var str = number.toString(); // 將數字4轉換為字符串
var result = str + "2"; // 連接字符串 "4" 和字符串 "2"

console.log(result); 

//第九題 判斷數字15是否在10到20的範国内，若是，就輸出true，否則輸出false
var number = 15;
var isInRange = number >= 10 && number <= 20;

console.log(isInRange); 

//第十題 判斷字串 "hello" 是否既不是空字串也不是undefined 若是 就輸出true，否則輸出false
var str = "hello";
var isNotEmptyAndDefined = str !== undefined && str !== "";

console.log(isNotEmptyAndDefined); 

//第十一題 判斷數宇25是否為偶數，若是。就輪出"Even"，否則輸出"Odd"。
var number = 25;

if (number % 2 === 0) {
    console.log("Even"); // 如果是偶數，輸出"Even"
} else {
    console.log("Odd"); // 如果是奇數，輸出"Odd"
}

//第十二題 比較數字x和數字y的大小・若x大於y・就輸出x・否則輸出y
var x = 10;
var y = 5;
var result = x > y ? x : y;

console.log(result); 