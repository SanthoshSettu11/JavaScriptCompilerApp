import React from "react";
import "./TextBox.css";
import { connect } from "react-redux";
import { inputChanged } from "../../store/console/ConsoleActions";

function TextBox(props) {
  return (
    <textarea
      className="text-box"
      value={props.textBoxContent}
      onChange={(e) => props.inputChanged(e.target.value)}
    >
      {props.textBoxContent}
    </textarea>
  );
}

const mapStateToProps = (state) => {
  return {
    textBoxContent: state.consoleReducer.textBoxContent
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    inputChanged: (textBoxContent) => dispatch(inputChanged(textBoxContent))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TextBox);
