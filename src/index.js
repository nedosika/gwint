import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Routes from "./routes";

import {GlobalStyles, theme} from './styles';
import {ThemeProvider} from "styled-components";
import {CurrentUserProvider} from "./hooks/useCurrentUser";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <CurrentUserProvider>
                <BrowserRouter>
                    <Routes/>
                </BrowserRouter>
            </CurrentUserProvider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

