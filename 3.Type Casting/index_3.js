// 1. 묵시적 형 변환 

let num = 10;
let str = "20"

// 문자열로 형 변환 
const result = num + str;
console.log(result);

// 2. 명시적 형 변환 
let str1 = "10";
let strToNum1 = Number(str1);
console.log(str1 + strToNum1);

let str2 = "10개";
let strToNum2 = parseInt(str1);
console.log(str2 + strToNum2);

// 숫자 -> 문자 
let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1 + "입니다")