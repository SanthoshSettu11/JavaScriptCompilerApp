import { TEXT_INPUT, EVALUATED } from "./ConsoleTypes";

export const inputChanged = (data) => {
  return {
    type: TEXT_INPUT,
    payLoad: data
  };
};

export const evaluate = () => {
  return {
    type: EVALUATED,
    payLoad: null
  };
};
