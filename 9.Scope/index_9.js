// 스코프 
// 전역(전체 영역) / 지역(특정 영역)
// 전역 스코프: 전체 영역에서 접근 가능 
// 지역 스코프: 특정 영역에서 접근 가능 

let a = 1; // 전역 스코프 

function funcA(){
    let b = 2; // 지역 스코프 

    function funcB(){} // 지역 스코프 (함수 안에서만)
}

console.log(funcA);

