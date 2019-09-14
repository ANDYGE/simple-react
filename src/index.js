import React from "react";
import ReactDOM from "react-dom";
import _ from "lodash";
import "./styles.css";

function App() {
  const arr = _.filter([1, 2, 3, 4, 5, 6], i => i % 2 === 0);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>{arr.join()}</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
