/**
 * Loops
 * 
 * 1) for
 * 2) while
 */
for(let i = 0; i < 10; i ++){
    console.log(i);
}

console.log('---------------');

for(let i = 10; i > 0; i --){
    console.log(i);
}

console.log('---------------');

for(let i =0; i <3; i++){
    for(let j = 3; j > 0; j--){
        console.log(i, j);
    }

}

console.log('---------------');

// *을 이용해서 6x6의 정사각형을 출력해라
let square = '';
let side = 6;

for(let i = 0; i < side; i++){
    for(let j = 0; j < side; j++){
        square += '*';
    }
    square += '\n';
}

console.log(square);

console.log('---------------');

/**
 * for...in
 */
//오브젝트 사용 키값 받을 수 있음
const yujin = {
    name: '안유진',
    year: 2003,
    group: '아이브',
}

for(let key in yujin){
    console.log(key);
}

console.log('---------------');

//리스트 사용 인덱스 값 받을 수 있음

const iveMemberArray = ['우진', '가을', '레이', '장원영', '리즈', '이서'];

console.log('---------------');

for(let key in iveMemberArray){
    console.log(key);
    console.log(`${key}:${iveMemberArray[key]}`);
}

console.log('---------------');

/**
 * for...of
 */
//값을 가져오고 싶을 때
for(let value of iveMemberArray){
    console.log(value);
}

console.log('---------------');

/**
 * While
 */
let number = 0;

while(number < 10){
    number ++;
}

console.log(number);

/**
 * do...while 안쓰는걸 추천
 */
number = 0;

do{
    number++;
} while (number < 10);

console.log(number);

/**
 * break
 */
console.log('---------------');

for(let i = 0; i < 10; i++ ){
    if ( i === 5){
        break;
    }
    console.log(i);
}

console.log('---------------');

number = 0;

while(number < 10){
    if(number === 5){
        break;
    }

    number ++;
    console.log(number);
}

/**
 * continue
 */
console.log('---------------');

for(let i = 0; i < 10; i++){
    if( i === 5){
        continue;
    }
    console.log(i);
}

console.log('---------------');

number = 0;

while(number < 10){
    number ++;

    if(number === 5){
        continue;
    }

    console.log(number);
}


