// 1. if 조건문 
let num = 10;

if(num >= 10){
    console.log("10 이상");
}else if(num >= 5){
    console.log("5 이상");
}else{
    console.log("조건이 모두 거짓");
}

// 2. Switch 문 
let animal = "cat";

switch(animal){
    case "cat":
        console.log("고양이");
        break;
    case "dog":
        console.log("강아지");
        break;
    case "tiger":
        console.log("호랑이");
        break;
    default: 
        console.log("일치하는 동물이 없습니다")
}