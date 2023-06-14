// 문제풀이: https://www.acmicpc.net/problem/2504

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(str) {
  const stack = [];
  const brackets = {
    '(': ')',
    '[': ']'
  };

  let tempResult = 0;
  let multiplier = 1;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === '(' || char === '[') {
      stack.push(char);
      multiplier *= (char === '(' ? 2 : 3);
    } else if (char === ')' || char === ']') {
      if (stack.length === 0 || brackets[stack[stack.length - 1]] !== char) {
        return 0;
      }

      if (str[i - 1] === '(' || str[i - 1] === '[') {
        tempResult += multiplier;
      }

      stack.pop();
      multiplier /= (char === ')' ? 2 : 3);
    }
  }

  return stack.length === 0 ? tempResult : 0;
}

console.log(solution(input[0]));
