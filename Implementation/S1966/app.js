// 문제: https://www.acmicpc.net/problem/1966

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const commands = input.slice(1);

function getPrintOrder(priorities, target) {
  let count = 0;
  let queue = priorities.map((priority, index) => ({ priority, index }));

  while (true) {
    const current = queue.shift();
    if (queue.some((item) => item.priority > current.priority)) {
      queue.push(current);
    } else {
      count++;
      if (current.index === target) {
        return count;
      }
    }
  }
}

for (let i = 0; i < n; i++) {
  const [_, target] = commands[i * 2].split(' ').map(Number);
  const priorities = commands[i * 2 + 1].split(' ').map(Number);

  console.log(getPrintOrder(priorities, target));
}
