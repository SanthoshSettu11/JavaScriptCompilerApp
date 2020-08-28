import React from "react";
import "./ConsoleOutput.css";
import { connect } from "react-redux";
import { inputChanged } from "../../store/console/ConsoleActions";

function ConsoleOutput(props) {
  return (
    <div className={`evaluate-result ${props.isError ? "error-class" : ""}`}>
      {props.evaluatedResult}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    evaluatedResult: state.consoleReducer.evaluatedResult,
    isError: state.consoleReducer.isError
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    inputChanged: (textBoxContent) => dispatch(inputChanged(textBoxContent))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConsoleOutput);
