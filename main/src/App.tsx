import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import { MainDiv } from "./components/MainDIv/MainDiv";

function App() {
    return (
        <BrowserRouter>
            <MainDiv>
                <div>
                    <Header />

                    <Main />

                    <Footer />
                </div>
            </MainDiv>
        </BrowserRouter>
    );
}

export default App;

