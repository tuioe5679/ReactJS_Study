// 함수 선언 
function hello() {
    console.log("hello JS");
}

// (매개변수)
function getArea(width,heigth) {
    area = width * heigth;
    return area;
}

hello();

// (인수)
let area = getArea(10,20);
console.log(area)

// 익명 함수
let varB = function () {
    console.log("funB");
};

varB()

// 화살표 함수 
let varC = () => {
    return 1;
};

console.log(varC());