import { TEXT_INPUT, EVALUATED } from "./ConsoleTypes";

const initialState = {
  evaluatedResult: "Output",
  textBoxContent: "",
  isError: false
};

const ConsoleReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEXT_INPUT:
      return {
        ...state,
        textBoxContent: action.payLoad
      };
    case EVALUATED: {
      let result = "";
      let isError = false;
      try {
        result = eval(state.textBoxContent);
      } catch (exp) {
        result = exp?.message;
        isError = true;
      }
      return {
        ...state,
        evaluatedResult: result,
        isError: isError
      };
    }
    default:
      return state;
  }
};

export default ConsoleReducer;
