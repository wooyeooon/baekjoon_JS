// 문제풀이: https://www.acmicpc.net/problem/1157

const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().toUpperCase();

const array = new Array(26).fill(0);   //26자리를 0으로 채운 배열을 만든다.
console.log(array);

for(let i=0; i<input.length; i++){
  array[input.charCodeAt(i)-65]++;   
  //input의 각 알파벳을 아스키코드로 변환한 후 65를 빼줘서 인덱스로 할당한다. 그리고 그 값에 +1을 해준다.
}
//ex) A의 아스키코드(=charCodeAt(A)) = 65 
//input.charCodeAt(A)-65 = 0
// 즉, array[0]의 값을 늘리는 것이다. 
// 배열 arra는 알파벳 자릿수만큼 26자리로 만들었기 때문에

const max = Math.max(...array);  //배열의 최댓값을 찾는다.
const index = array.indexOf(max);   //최댓값의 인덱스를 찾는다.

let Same = false;   
//기본 설정을 false로 해준다. (최댓값이 많이 있는 경우에만 true로 변경해줄 것이기 때문에)

for(let j=0; j<26; j++){
    if(array[j] === max && index != j){  //최댓값이 있는데 위에서 설정한 최댓값의 인덱스와 다른 경우 
        Same =true;          //true로 변환
        break;              //for문을 끝낸다.
    }
}

console.log(Same ? "?" : String.fromCharCode(index+65));  //Same이 true인 경우 "?"를 출력, 아닌 경우 최댓값을 가진 알파벳을 문자로 출력.
