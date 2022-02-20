import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// function Fun() {
//   return <h4>hello World</h4>;
// }
const Greeting = () => {
  return React.createElement("h1", {}, "HelloWorld");
};

ReactDOM.render(<Greeting />, document.getElementById("root"));
