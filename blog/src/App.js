// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [info, setInfo] = useState([
    { title: "남자 코트 추천", like: 0 },
    { title: "강남 우동맛집", like: 0 },
    { title: "파이썬독학", like: 0 },
  ]);
  let [but, setBut] = useState("남자");

  function pressLike(i) {
    // let copyInfo = info.slice();
    // copyInfo[i] = {
    //   ...copyInfo[i],
    //   like: copyInfo[i].like + 1,
    // };
    // setInfo(copyInfo);

    setInfo((prev) => {
      let copy = [...prev];
      copy[i] = {
        ...copy[i],
        like: copy[i].like + 1,
      };
      return copy;
    });
  }

  function pressBut() {
    let newBut = but === "남자" ? "여자" : "남자";
    setBut(newBut);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>
          ReactBlog{" "}
          <span
            style={{
              display: "inline-flex",
              backgroundColor: "black",
              border: "1px solid white",
              borderRadius: "5px",
              overflow: "hidden",
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            <span
              style={{
                backgroundColor: but === "남자" ? "white" : "black",
                color: but === "남자" ? "black" : "white",
                padding: "5px",
              }}
              onClick={() => {
                if (but === "여자") pressBut();
              }}
            >
              남자
            </span>
            <span
              style={{
                backgroundColor: but === "여자" ? "white" : "black",
                color: but === "여자" ? "black" : "white",
                padding: "5px",
              }}
              onClick={() => {
                if (but === "남자") pressBut();
              }}
            >
              여자
            </span>
          </span>
        </h4>
      </div>
      {info.map((v, idx) => {
        return (
          <div className="list" key={idx}>
            <h4>
              {idx === 0 ? `${but} 코트 추천` : v.title}{" "}
              <span
                style={{ cursor: "pointer" }}
                onClick={() => {
                  pressLike(idx);
                }}
              >
                👍
              </span>{" "}
              {v.like}
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
