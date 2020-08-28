import React from "react";
import "./RootView.css";
import TextBox from "./TextBox/TextBox";
import RunButton from "./RunButton/RunButton";
import ConsoleOutput from "./ConsoleOutput/ConsoleOutput";

function RootView() {
  return (
    <div className="root-container">
      <div className="left-container">
        <header className="header">
          <div className="label-content">Code</div>
          <div className="button-container">
            <RunButton></RunButton>
          </div>
        </header>
        <div className="text-box-container">
          <TextBox></TextBox>
        </div>
      </div>
      <div className="right-container">
        <header className="header">
          <div className="label-content">Output</div>
        </header>
        <div className="text-box-container">
          <ConsoleOutput></ConsoleOutput>
        </div>
      </div>
    </div>
  );
}

export default RootView;
