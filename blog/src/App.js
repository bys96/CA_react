// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [title, setTitle] = useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);

  let [like, setLike] = useState([0, 0, 0]);

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ backgroundColor: "grey" }}>ReactBlog</h4>
      </div>
      <div className="list">
        <h4>
          {title[0]} <span>👍</span> {like[0]}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>
          {title[1]} <span>👍</span> {like[1]}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>
          {title[2]} <span>👍</span> {like[2]}
        </h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
