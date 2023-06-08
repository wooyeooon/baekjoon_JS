// 문제풀이: https://www.acmicpc.net/problem/2535

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = parseInt(input[0]);
const records = [];

for (let i = 1; i <= N; i++) {
  const [school, student, score] = input[i].split(' ').map(Number);
  records.push({ school, student, score });
}

records.sort((a, b) => b.score - a.score);

const selected = [];
const schoolCount = {};

for (let i = 0; i < records.length; i++) {
  const { school, student, score } = records[i];
  
  if (selected.length === 3) {
    break;
  }

  if (schoolCount[school] === undefined || schoolCount[school] < 2) {
    selected.push(`${school} ${student}`);
    schoolCount[school] = (schoolCount[school] || 0) + 1;
  }
}

console.log(selected.join('\n'));
