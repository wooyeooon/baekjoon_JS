// 문제풀이: https://www.acmicpc.net/problem/18353

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [input_N, input_nums] = input.map((v) => v.split(" ").map(Number));

function solution(N, nums) {
  const binarySearch = (target, left, right) => {
    while (left < right) {
      const mid = ~~((left + right) / 2);
      if (LIS[mid] < target) left = mid + 1;
      else right = mid;
    }

    return right;
  };

  const LIS = [];
  nums.reverse().forEach((num) => {
    if (LIS.length === 0 || LIS[LIS.length - 1] < num) LIS.push(num);
    else {
      const changePlace = binarySearch(num, 0, LIS.length - 1);
      LIS[changePlace] = num;
    }
  });

  return N - LIS.length;
}

console.log(solution(input_N, input_nums));