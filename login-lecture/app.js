"use strict";

const PORT = 3007;

// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./routes/home"); // home 폴더의 index.js 파일을 읽게 된다.

// app 세팅
app.set("views", "./views");
app.set("view engine", "ejs");


app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드

app.listen(PORT, function() {
    console.log("nodejs:exprss를 사용한 서버 구동");
});