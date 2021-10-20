import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Index from "./routes";

import {GlobalStyles, theme} from './styles';
import {ThemeProvider} from "styled-components";
import Layout from "./layout";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <BrowserRouter>
                <Layout>
                    <Index/>
                </Layout>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

