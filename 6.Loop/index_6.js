for (let i=0;i<10;i++){
    if(i%2 === 0){
        continue;
    }
    if(i>=5){
        break;
    }
    console.log("반복");
}

let count = 0;

while(count <=5){
    ++count;
    console.log("while 반복");
}