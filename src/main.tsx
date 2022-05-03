import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import rootStore from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import "antd/dist/antd.css";
import { Spin } from "antd";

ReactDOM.render(
  <Provider store={rootStore.store}>
    <PersistGate loading={<Spin />} persistor={rootStore.persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
