import React from "react";
import "./styles.css";
import CounterContainer from "./containers/CounterContainer";
import SampleContainer from "./containers/SampleContainer";

export default function App() {
  return (
    <div className="App">
      <CounterContainer />
      <hr />
      <SampleContainer />
    </div>
  );
}
