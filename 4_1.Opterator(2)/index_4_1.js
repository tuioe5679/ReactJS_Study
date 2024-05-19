// 1, null 병합 연산자 
// -> 존재하는 값을 주쳐내는 기능 
// -> null, undefined가 아닌 값을 찾아줌 

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
let var5 = var1 ?? var3;
let var6 = var3 ?? var2; 

let userName;
let userNickName = "NickName";

let displayName = userName ?? userNickName;

// 2.typeof 연산자 
// -> 값의 타입을 문자열로 변환하는 기능을 하는 연산자 

let var7 = 1;
var7 = "hello";

let result = typeof var7;
console.log(result);

// 3. 삼항 연산자 
// -> 항을 3개 사용하는 연산자 
// -> 조건식을 통해 참,거짓일 때의 값을 다른게 변환 
let var8 = 10;

// 변수 res에 var8값이 짝수 => "짝", 홀수 => "홀"
let res = var8 % 2 ? "짝" : "홀수";