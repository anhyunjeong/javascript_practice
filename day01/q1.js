
/*
변수이름
변수, 수학, 과학, 영어, 탐구영역
해당 변수에는 원하는 점수를 할당
4가지의 평균 점수에 따라 아래와 같은 문장을 출력

만약 평균점수가 90점이 넘는다면
000님의 학점은 A 학점입니다.

만약 평균점수가 80점이 넘는다면
000님의 학점은 B 학점입니다.

만약 평균점수가 70점이 넘는다면
000님의 학점은 C 학점입니다.

그외 나머지는
000님의 학점은 F 학점입니다.

경로 day01 -> node q1.js

*/


let totalScore;// 4과목 점수의 총 합계
let average;
let name;
//let grade;
//초기값 설정 중요
let grade = "F";

if(totalScore / 4 >= 90){
    let grade = "A";
    console.log(`${name}님의 학점은 ${grade}입니다`)
    return;
}else if(totalScore / 4 >= 80){
    let grade = "B";
    console.log(`${name}님의 학점은 ${grade}입니다`)
    return;
}else if(totalScore / 4 >= 70){
    let grade = "C";
    console.log(`${name}님의 학점은 ${grade}입니다`)
    return;
}else{
    let grade = "F";
    console.log(`${name}님의 학점은 ${grade}입니다`)
    return;
}
//불필요한 연산을 줄이기

// console.log(`${name}님의 학점은 ${grade}입니다`) //백틱 ` 사용
// console.log(name + "님의 학점은" + grade + "입니다.") 

//let grade ='F';
// if(average >=90){
//     grade="A";
// }

//console.log(`${name}님의 학점은 ${grade}입니다`) 을 마지막에 출력되게끔

//고쳐보기