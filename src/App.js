/* eslint-disable */

import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [name, changeName] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "강남 고기 맛집",
  ]);
  let [thumb, thumbsUp] = useState(0);

  function reName() {
    let newArray = [...name];
    newArray[0] = "여자 코트 추천";
    changeName(newArray);
  }

  return (
    <div className="App">
      <div className="blank-nav">
        <div>Pizzahand Blog</div>
      </div>
      <button onClick={reName}>버튼</button>
      <div className="list">
        <h3>
          {name[0]} <span onClick={() => thumbsUp(thumb + 1)}>👍</span> {thumb}
        </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{name[1]}</h3>
        <p>2월 18일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{name[2]}</h3>
        <p>2월 19일 발행</p>
        <hr />
      </div>
      <Modal />
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
