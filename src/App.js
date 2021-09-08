// import logo from './logo.svg';
import React, { Suspense } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import TodoDataConsumer from "./contextApi/TodoDataContext";
// import { DefaultEffects } from '@fluentui/react';
import SideBar from "./components/SideBar";
import MainComponent from "./components/MainComponent";

function App() {
  sessionStorage.setItem("catgoryID", "menu");
  sessionStorage.setItem("catgoryName", "Main Page");
  return (
    <div>
      <TodoDataConsumer>
        {(value) => {
          const theme = value.theme
            ? {
                backgroundImage:
                  "url(background-image: url(./images/ipad-pro-stock-2020-apple-hd-2688x2688-758.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : { background: "black" };
          return (
            <div className="App" style={theme}>
              <NavBar />
              <div className="ms-Grid" dir="ltr">
                <div className="ms-Grid-row flex">
                  <div className="ms-Grid-col ms-lg2">
                    <Suspense fallback="loading">
                      <div>
                        <SideBar />
                      </div>
                    </Suspense>
                  </div>
                  <div className="ms-Grid-col  ms-lg10 " style={{}}>
                    <MainComponent />
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </TodoDataConsumer>
    </div>
  );
}
export default App;
