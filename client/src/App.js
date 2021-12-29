import { useBackground } from "lib";
import React from "react";
import RootRouter from "router";
import "styles/main.scss";

function App() {
    useBackground("wheat");
    return (
        <>
            <RootRouter />
        </>
    );
}

export default App;
