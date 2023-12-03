import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { GlobalStyle } from "./styles/globalStyle";
import { FontStyles } from "./styles/Fonts/FontStyles";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);

root.render(
    <React.StrictMode>
        <FontStyles />
        <GlobalStyle />
        <App />
    </React.StrictMode>,
);
