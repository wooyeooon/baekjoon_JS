// 문제풀이: https://www.acmicpc.net/problem/2563

const fs = require("fs");
const [amount, ...papers] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const whiteBoard = Array.from(Array(100), () => new Array(100).fill(false));
let trues = 0;
const length = 10;

papers.forEach((e) => {
  const [x, y] = e.split(" ").map((e) => +e);
  for (let i = x; i < x + length; i++) {
    for (let j = y; j < y + length; j++) {
      whiteBoard[i][j] = true;
    }
  }
});

whiteBoard.forEach((e) => {
  e.forEach((ee) => {
    if (ee === true) trues++;
  });
});

console.log(trues);
