// 1. 대입 연산자 
let var1 = 1;

// 2. 산술 연산자 
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = (1 + 2) * 10;

// 3. 복합 대입 연산자 

let num7 = 30;

num7 += 20;
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 20;

// 4. 증감 연사자
let num8 = 10;
++num8; // 전위 연산 <- 해당 라인에서 즉시 값이 증가
num8++; // 후위 연산 <- 변수 뒤에는 해당 라인이 끝나야 값이 증가 

// 5. 논리 연산자 
let or = true || false;
let and = true && false;
let not = !true;

console.log(or,and,not);

// 6. 비교 연산자

// == 자료형을 비교 X 
// === 자료형도 비교 O
let comp = 1 === 2;
let comp2 = 1 !== 2; 

let comp3 = 2 > 1;
let comp4 = 2 < 1;

let comp5 = 2 >= 1;
let comp6 = 2 <= 1;

console.log(comp,comp2,comp3,comp4,comp5,comp6);
