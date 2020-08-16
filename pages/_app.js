import React from 'react';
import auth0 from '../services/auth0';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/main.scss";
import { Component } from "react";


class App extends React.Component {

    static async getInitialProps({Component, ctx}) {
        let pageProps = {};
        const isAuthenticated = process.browser ? auth0.clientAuth() : auth0.serverAuth(ctx.req);

        console.log(isAuthenticated);

        if(Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;
        return <Component {...pageProps} />
    }
    
}

export default App;