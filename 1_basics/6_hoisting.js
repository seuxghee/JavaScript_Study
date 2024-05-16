/**
 * Hoisting
 */
console.log('Hello');
console.log('World');
console.log('------');

/**
 * Hoisting은 무엇인가?
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기한다.
 */
//var name;
//console.log(name);
//name = '코드팩토리';
//console.log(name);

//호이스팅 현상을 막아줄 수 있음
console.log(yuJin);
let yuJin = '안유진';

console.log(yuJin1);
const yuJin1 = '안유진';

