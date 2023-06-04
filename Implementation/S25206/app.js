// 문제풀이: https://www.acmicpc.net/problem/25206

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');


function solution(input){  
  let point_value = 0;
  let total_credit = 0;
  for(let i=0; i<input.length; i++){
      let credit = +input[i].split(' ')[1].trim();
      const grade = input[i].split(' ')[2].trim();
      let grade_score = 0;
      if(grade == 'A+'){grade_score = 4.5}
      else if(grade == 'A0'){grade_score = 4.0}
      else if(grade == 'B+'){grade_score = 3.5}
      else if(grade == 'B0'){grade_score = 3.0}
      else if(grade == 'C+'){grade_score = 2.5}
      else if(grade == 'C0'){grade_score = 2.0}
      else if(grade == 'D+'){grade_score = 1.5}
      else if(grade == 'D0'){grade_score = 1.0}
      else if(grade == 'F'){grade_score = 0.0}
      else if(grade == 'P'){
          credit = 0
          grade_score = 0}
      point_value += credit*grade_score
      total_credit += credit
  }
  console.log((point_value / total_credit).toFixed(6))
}

solution(input)
