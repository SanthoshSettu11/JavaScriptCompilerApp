import React from "react";
import "./App.css";
import RootView from "./views/RootView";
import { Provider } from "react-redux";
import store from "./store/RootStore";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RootView></RootView>
      </div>
    </Provider>
  );
}

export default App;
