import "../styles/main.scss";
import { Component } from "react";

const App = ({Component, pageProps}) => {
    return <Component {...pageProps} />
}

export default App;