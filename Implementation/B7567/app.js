// 문제풀이: https://www.acmicpc.net/problem/7567

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

function calculateHeight(dishes) {
  let height = 10; // 그릇의 기본 높이는 10

  for (let i = 1; i < dishes.length; i++) {
    if (dishes[i] === dishes[i - 1]) {
      height += 5; // 같은 그릇이 연속으로 쌓이면 높이에 5를 추가
    } else {
      height += 10; // 다른 그릇이 쌓이면 높이에 10을 추가
    }
  }

  return height;
}

console.log(calculateHeight(input));
