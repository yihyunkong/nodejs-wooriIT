const http = require("http"); // npm에 포함된 모듈이 아닌 내장 모듈이다. (node-npm의 express와 비교하기)
const app_http = http.createServer((req, res) => { // require로 http 모듈을 가지고 와서 app_http에 서버 설정 후 주입
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8"});
    if (req.url === "/") {
        res.end("여기는 루트입니다.");
    } else if (req.url === "/login") {
        res.end("여기는 로그인 서버입니다.");
    }
});
// 여기까지만 봐도 express를 써야하는 이유,,, express를 사용하면 if-else문을 사용할 필요가 없다.


app_http.listen(3008, () => {
    console.log("http로 가동한 서버입니다.");
});

// 서버는 열려있지만 루트 경로를 설정하지 않으면 계속 로딩만 된다.