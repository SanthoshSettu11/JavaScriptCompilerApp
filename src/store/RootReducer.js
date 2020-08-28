import { combineReducers } from "redux";
import ConsoleReducer from "./console/ConsoleReducer";

const RootReducer = combineReducers({
  consoleReducer: ConsoleReducer
});

export default RootReducer;
