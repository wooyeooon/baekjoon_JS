// 문제풀이: https://www.acmicpc.net/problem/11971

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

  function calculateMaxSpeed(input) {
    const lines = input.trim().split('\n');
    const [n, m] = lines[0].split(' ').map(Number);
  
    const roadLengths = lines.slice(1, n + 1).map(line => line.split(' ').map(Number));
    const speeds = lines.slice(n + 1).map(line => line.split(' ').map(Number));
  
    let maxSpeed = 0;
    let currentPosition = 0;
  
    for (let i = 0; i < n; i++) {
      const [roadLength] = roadLengths[i];
      const [speed] = speeds[i];
  
      maxSpeed = Math.max(maxSpeed, speed);
  
      if (currentPosition + roadLength < m) {
        currentPosition += roadLength;
      } else {
        const remainingDistance = m - currentPosition;
        maxSpeed = Math.max(maxSpeed, Math.floor(remainingDistance / roadLength));
        break;
      }
    }
  
    return maxSpeed;
  }
  
  console.log(calculateMaxSpeed(input));