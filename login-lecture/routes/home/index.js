"use strict";

const express = require("express");
const router = express.Router(); // route를 사용할 때는 선언을 router, express에 Router() 객체를 불러오면 된다.

// index 페이지
router.get("/", hello); // hello라는 함수가 이곳에서 사용될 것. (hone.ctrl.js가 가지고 있는 함수 hello)

// login 페이지
router.get("/login", (req, res) => {
    res.render("home/login");
});

// router를 외부에서도 사용할 수 있게 한다. (내보내기)
// router는 클라이언트의 요청을 연결해주는 부분이다. 

module.exports = router;