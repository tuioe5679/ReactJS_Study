// 1. 객체 생성 
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 

// 2. 객체 프로퍼티 key : value 
let person = {
    name: "이름",
    age: 10,
    hobby: "게임",
    job: "일",
};

console.log(person);

// 3. 객체  프로퍼티를 다루는 방법 
// 3-1 특정 프로퍼티에 접급(점 표기법,괄호 표기법)
let name = person.name;
let age = person["age"];

console.log(age)
console.log(name);

// 3-2 새로운 프로퍼티를 추가 하는 방법 
person.job = "developer";
person["nickname"] = "nickname"; 

console.log(person);

// 3-3 프로퍼티를 수정하는 방법
person.job = "educator";
person["nickname"] = "닉네임";

console.log(person);

// 3-4 프로퍼티를 삭제하는 방법 
delete person.age;

// 3-5 프로퍼티의 존재 여부를 확인하는 방법 (in 연산자)
let result = "name" in person;
let result2 = "cat" in person;
console.log(result);
console.log(result2);
