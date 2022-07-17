// (express는 프레임워크이다. 웹 애플리케이션을 만들기 위한 각종 라이브러리와 미들웨어 등이 내장되어있다. - 개발자 통일성 : 프레임워크) 
const express = require("express"); // require로 express 다운 받기 (nodejs 예약어인 require로 외부 모듈 가지고 올 수 있다.)
const app_express = express(); // express 실행 (파일 명을 작성해야한다. 파일명과 상수명이 다르면 서버 가동이 안됨)

app_express.get("/", (req, res) => { // callback 함수 : 나중에 호출되는 함수 >> 어떤 이벤트가 발생했거나 특점 시점에 도달했을 때 시스템에서 호출된다.
// 브라우저에서 "/(루트)" 경로로 들어오면 동작을 하겠다. (callback 함수)
// 파라미터 (req, res) >> req : 요청객체, res : 응답객체
    res.send("여기는 루트입니다."); // res 객체를 사용했으니 브라우저에 메세지가 뜬다.
    // 요청-응답을 사용했을 때는 서버를 재가동 해야한다. (터미널 ctrl+c > node app.js)
}); // get-post 방식의 get

app_express.get("/login", (req, res) => { // 슬래쉬(/) 꼭 사용하기 ! /는 루트경로 /_____는 경로 이동
    res.send("여기는 로그인 화면입니다.");
});

app_express.listen(3005, function() { // 서버 가동을 위한 listen 명령어. (포트번호 3005) function 대신 arrow function을 사용하도록 하자.
    console.log("서버 가동");
});
// 이 시점에서 localhost:3005를 웹에서 연다면? Cannot GET/ 이라는 메세지가 뜬다. (5번 라인의 app.get()을 사용해야한다.)

/*
    routing 기능
    express를 사용하여 로그인 기능 구현하기
*/

