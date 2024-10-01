/**
 * Array Functions
 */
let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

console.log(iveMembers);

// push()
console.log(iveMembers.push('코드팩토리'));
console.log(iveMembers);

console.log('-----------');
//pop() - 마지막 값 삭제 반환
console.log(iveMembers.pop());
console.log(iveMembers);

console.log('-----------');
//shift() - 첫번째 값 삭제 반환
console.log(iveMembers.shift());
console.log(iveMembers);

//unshift() - 첫번째에 값을 넣음
console.log(iveMembers.unshift('안유진'));
console.log(iveMembers);

console.log('-----------');

console.log(iveMembers.splice(0, 3))
console.log(iveMembers);

iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

console.log(iveMembers);

// concat()-새로운 Array를 만들어서 반환
console.log(iveMembers.concat('코드팩토리'));
console.log(iveMembers); // Array가 변경되지 않음

// slice() - 0번인덱스부터 3번까지 잘라서출력
console.log(iveMembers.slice(0, 3));
console.log(iveMembers); // Array가 변경되지 않음

// sparead operator
let iveMembers2 = [
    ...iveMembers,
];
console.log(iveMembers2);

let iveMembers3 = [
    iveMembers,
];
console.log(iveMembers3);


console.log('-----------');
let iveMembers4 = iveMembers;

console.log(iveMembers4);
console.log(iveMembers4 === iveMembers);

// join()
console.log(iveMembers.join());
console.log(iveMembers.join('/'));
console.log(iveMembers.join(', '));

// sort()
// 오름차순

console.log(iveMembers);

console.log(iveMembers.reverse());

let numbers = [
    1,
    9,
    7,
    5,
    3,
];
console.log(numbers);

//반복해서 보기
// a, b를 비교했을때
// 1) a를 b 보다 나중에 정렬하려면 (뒤에두려면) 0보다 큰 숫자를 반환
// 2) a를 b 보다 먼저 정렬하려면 (앞에두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a,b) =>{
    return a > b ? 1 : -1;
});
console.log(numbers);

numbers.sort((a,b) => a > b ? -1 : 1);
console.log(numbers);

console.log('-----------');

// map()
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브: ${x}`));

console.log(iveMembers.map((x) => {
    if(x === '안유진'){
        return `아이브: ${x}`;
    }else{
        return x;
    }
}));
console.log(iveMembers);

// filter()
number = [1, 8, 7, 6, 3];

console.log(number.filter((x) => x % 2 === 0));

//find() -순서대로 반환하다가 첫번째에 해당 값만 반환
console.log(numbers.find((x) => x % 2 === 0 ));

// findIndex() - 인덱스만 반환
console.log(numbers.findIndex((x) => x % 2 === 0 ));

//reduce
console.log(numbers.reduce((p,n) => p+n, 0));

// reduce() 퀴즈
// reduce() 함수를 사용해서 iveMembers 변수에 있는 모든 스트링 값들의
// 길이를 더해서 반환하라.
// 참고로 string의 길이는 .length를 이용해서 구할 수 있다.
console.log(iveMembers.reduce((p, n) => p + n.length, 0)) 
