// 문제풀이: https://www.acmicpc.net/problem/10951

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

//* 인풋 - 커스텀
for (let i = 0; i < input.length; i++) {
  let nums = input[i].split(' ').map((num) => Number(num));
  solution(nums);
}

//* 시스템
function solution(nums) {
  let sum = nums[0] + nums[1];
  if (!isNaN(sum)) {
    console.log(sum);
  }
}