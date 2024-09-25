/**
 * Operators
 * 
 * 연산자
 */


/**
 * 산술연산자
 * 
 * 1) 덧셈
 * 2) 뺼셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 * 
 */
console.log(10+10);
console.log(10-10);
console.log(10*10);
console.log(10/10);
console.log(10%10);
console.log(10 % 3);

console.log('-------------');

console.log(10 * (10+10));

/**
 * 증가와 감소
 */
let number = 1;

number ++;
console.log(number);

number --;
console.log(number);

console.log('-------------');

/**
 * 연산자의 위치
 */
let result = 1;
console.log(result);

result = number ++;
console.log(result, number);

result = number --;
console.log(result, number);

result = ++ number;
console.log(result, number);

result = -- number;
console.log(result, number);

console.log('-------------');

/**
 * 숫자 타입이 아닌 타입에 +,- 사용하면 어떻게 될까?
 */
let sample = '99';

console.log(+sample);
console.log(typeof +sample); // number로 변경 가능함

console.log(sample);
console.log(typeof sample);

sample = true; //1
console.log(+sample);
console.log(typeof +sample);

sample = false; //0
console.log(+sample);
console.log(typeof +sample);

sample = '안유진'
// Nan -> Not a Number
console.log(+sample);

sample = '99';
console.log(-sample);
console.log(typeof -sample);

console.log('-------------');

/**
 * 할당 연산자 (assignment operator)
 */

number = 100;
console.log(number);

number += 10;
console.log(number);

number -= 10;
console.log(number);

number *= 10;
console.log(number);

number /= 10;
console.log(number);

number %= 10;
console.log(number);

console.log('-------------');

/**
 * 비교 연산자
 * 
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 */

console.log( 5==5);
console.log(5 == '5');
console.log(0 == '');
console.log(true == 1);
console.log(false == 0);
console.log(true == '1');

//타입도 비교-자바스크립트에서는 이렇게
console.log( 5===5);
console.log(5 === '5');
console.log(0 === '');
console.log(true === 1);
console.log(false === 0);
console.log(true === '1');

console.log('-------------');

console.log( 5!=5);
console.log(5 != '5');
console.log(0 != '');
console.log(true != 1);
console.log(false != 0);
console.log(true != '1');

console.log('-------------');
//타입도 비교
console.log( 5!==5);
console.log(5 !== '5');
console.log(0 !== '');
console.log(true !== 1);
console.log(false !== 0);
console.log(true !== '1');

console.log('-------------');

/**
 * 대소 관계 비교 연산자
 */

console.log(100 > 1);
console.log(100 < 1);
console.log(100 <= 1);
console.log(100 >= 1);

console.log('-------------');


/**
 * 삼항 조건 연산자 (ternary operator) - ?를 기준으로 조건을 짤 수 있고 , : 기준 true일때 왼쪽 false일때 오른쪽 반환
 */

console.log(10 > 0 ? '10의 0보다 크다' : '10이 0보다 작다');

console.log('-------------');

/**
 * 논리연산자
 * 
 * 1) && (and)
 * 2) || (or)
 * 
 */

// && 조건은 모두 true여야 true를 반환한다.
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log('-------------');

// ||은 하나만 true여도 true를 반환한다.
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log('-------------');

console.log(10 > 1 && 20 > 2);
console.log(10 < 1 && 20 > 2);
console.log(10 < 1 && 20 > 2);

console.log(10 > 1 || 20 > 2);
console.log(10 < 1 || 20 > 2);
console.log(10 < 1 || 20 < 2);

console.log('-------------');

/**
 * 단축평가 (shor circuit evaluation) - 외워야함
 * 
 * &&를 사용했을때 좌측이 true면 우측 값 변환
 * &&를 사용했을때 좌측이 false면 좌측 값 반환
 * ||를 사용했을때 좌측이 true면 좌측 값 반환
 * ||를 사용했을때 좌측이 false면 우측 값 반환
 */
console.log(true || '아이브');
console.log(false || '아이브');
console.log(false && '아이브');
console.log(true && '아이브');

console.log(true && true && '아이브');
console.log(true && false && '아이브');

/**
 * 지수 연산자
 */
console.log(2 **2);
console.log(10 ** 3);

console.log('-------------');

/**
 * null 연산자
 */
let name;
console.log(name);

name = name ?? '코드팩토리'; // name이 널값일 때 '코드팩토리' 저장
console.log(name);

name = name ?? '아이브'; // name이 이미 널값이 아님
console.log(name);
//위 코드와 같음
let name2;
name2 ??= '코드팩토리';
console.log(name2);
