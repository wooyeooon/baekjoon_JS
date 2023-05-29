// 문제풀이: https://www.acmicpc.net/problem/5597

//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

//* 인풋 - 커스텀, 함수 콜
const nums = input.map((num) => Number(num));
sol(nums);

//* 로직함수
function sol(nums) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], 1);
  }

  for (let i = 1; i <= 30; i++) {
    if (!map.has(i)) {
      console.log(i);
    }
  }
}