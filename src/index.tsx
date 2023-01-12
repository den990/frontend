import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App/App";
import {addOnChangeHandler} from "./stateManager/stateManager";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

function render() {
    root.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    );
}

render();
addOnChangeHandler(render);
