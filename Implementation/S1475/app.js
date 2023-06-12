// 문제: https://www.acmicpc.net/problem/1475

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

function countSets(n) {
  const numCount = Array(10).fill(0); // 0부터 9까지의 숫자 개수를 저장하는 배열
  let setCount = 0; // 필요한 세트의 개수

  // 숫자 개수 카운팅
  for (let i = 0; i < n.length; i++) {
    const num = Number(n[i]);
    numCount[num]++;
  }

  // 6과 9를 같은 숫자로 취급하여 카운팅
  const total = numCount[6] + numCount[9];
  numCount[6] = Math.ceil(total / 2);
  numCount[9] = Math.ceil(total / 2);

  // 필요한 세트의 개수 계산
  for (let count of numCount) {
    if (count > setCount) {
      setCount = count;
    }
  }

  return setCount;
}

const result = countSets(input);
console.log(result);
