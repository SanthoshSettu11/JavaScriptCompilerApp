import React from "react";
import "./RunButton.css";
import { connect } from "react-redux";
import "./RunButton.css";
import { evaluate } from "../../store/console/ConsoleActions";

function RunButton(props) {
  return (
    <button className="button" onClick={() => props.evaluate()}>
      RUN
    </button>
  );
}

const mapStateToProps = (state) => {
  return {
    textBoxContent: state.consoleReducer.textBoxContent
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    evaluate: () => dispatch(evaluate())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RunButton);
