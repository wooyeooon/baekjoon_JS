// 문제: https://www.acmicpc.net/problem/17413


const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

function reverseString(str) {
  return str.split('').reverse().join('');
}

function solution(input) {
  let result = '';
  let tag = false; // 태그 안인지 여부를 나타내는 변수
  let word = ''; // 단어를 저장할 변수

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (char === '<') {
      // 태그의 시작
      result += reverseString(word) + '<';
      word = '';
      tag = true;
    } else if (char === '>') {
      // 태그의 끝
      result += '>';
      tag = false;
    } else if (tag) {
      // 태그 내부의 문자열
      result += char;
    } else {
      // 태그 외부의 문자열
      if (char === ' ') {
        // 단어의 끝
        result += reverseString(word) + ' ';
        word = '';
      } else {
        // 단어의 일부
        word += char;
      }
    }
  }

  // 마지막 단어 처리
  result += reverseString(word);

  return result;
}

console.log(solution(input));
