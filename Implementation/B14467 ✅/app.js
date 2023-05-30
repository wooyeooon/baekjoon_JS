// 문제풀이: https://www.acmicpc.net/problem/14467

//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

//* 인풋 - 커스텀, 함수 콜
const [n, ...nums] = input.map((nums) => nums.split(' ').map((num) => Number(num)));
console.log(n, nums);
console.log(sol(n, nums));

//* 로직함수
function sol(n, nums) {
  let map = new Map();
  let count = 0;

  for (let i = 0; i < n; i++) {
    let key = nums[i][0];
    let curValue = nums[i][1];
    let preValue = map.get(key);

    if (preValue === undefined) {
      map.set(key, curValue);
    } else {
      if (preValue !== curValue) {
        count++;
        map.set(key, curValue);
      }
    }
  }
  return count;
}