# Baekjoon with JavaScript

---

```javascript
// 1. 입력값이 한 개일 때(한 줄)
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();
```

```javascript
// 2. 입력값이 여러 개일 때(한 줄에 공백으로 구분)
/* ex)
110 78 158
*/
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");
```

```javascript
// 3. 입력값이 여러 줄일 때
/* ex)
110
78
158
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
```

```javascript
// 4. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄에 공백으로 구분된 n개의 값들을 입력받을 때
/* ex)
3
110 78 158
*/
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const inputArr = input.trim().split(" ");
```

```javascript
// 5. 입력값이 첫 번째 줄에는 입력 값의 길이(n), n개의 줄에 걸쳐서 한 줄에 하나의 입력값이 주어질 때
/* ex)
3
110
78
158
*/
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, input] = fs.readFileSync(filePath).toString().trim().split("\n");
```

```javascript
// 제출용 링크 '/dev/stdin'
```

```javascript
// 문제풀이: https://www.acmicpc.net/problem/25314

//* 인풋 - 디폴트
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let inputs = [];
inputs = input[0].split(" ");
// console.log(inputs);  //--> [ '10', '5' ]

let total = Number(inputs[0]);
let limit = Number(inputs[1]);

let numbers = [];
numbers = input[1].split(" ");
// console.log(numbers);  //-->  [ '1', '10', '4', '9', '2', '3', '8', '5', '7', '6' ]

result = "";
for (let i = 0; i < total; i++) {
  if (Number(numbers[i]) < limit) {
    result += numbers[i] + " ";
  }
}

console.log(result);
```

```javascript
let credit = +input[i].split(" ")[1].trim();
const grade = input[i].split(" ")[2].trim();
// ObjectOrientedProgramming1 3.0 A+ 자르기
```
