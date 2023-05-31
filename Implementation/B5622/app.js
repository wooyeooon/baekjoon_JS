// 문제풀이: https://www.acmicpc.net/problem/5622

//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');
input = input[0];

function solution(input) {
  let answer = 0;
  const changeToNumber = (alphabet) => {
    const numbers = {
      'A': 2,
      'B': 2,
      'C': 2,
      'D': 3,
      'E': 3,
      'F': 3,
      'G': 4,
      'H': 4,
      'I': 4,
      'J': 5,
      'K': 5,
      'L': 5,
      'M': 6,
      'N': 6,
      'O': 6,
      'P': 7,
      'Q': 7,
      'R': 7,
      'S': 7,
      'T': 8,
      'U': 8,
      'V': 8,
      'W': 9,
      'X': 9,
      'Y': 9,
      'Z': 9,
    };
    return numbers[alphabet];
  };
  input.split('').forEach(alphabet => answer += changeToNumber(alphabet) + 1);
  return answer;
}

console.log(solution(input));


