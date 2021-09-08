import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { TodoDataProvider } from "./contextApi/TodoDataContext";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import common_tr from "./translations/tr/common.json";
import common_en from "./translations/en/common.json";
// import "bootstrap/dist/css/bootstrap.min.css";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
initializeIcons();
i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      common: common_en,
    },
    tr: {
      common: common_tr,
    },
  },
});
ReactDOM.render(
  <TodoDataProvider>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </TodoDataProvider>,
  document.getElementById("root")
);
reportWebVitals();