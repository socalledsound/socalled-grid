import React from 'react';
import ReactDOM from 'react-dom'
import App from './App.js';
import Header from './components/Header';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
    // <React.StrictMode>
        <BrowserRouter>
            <CssBaseline />
            <Header />
            <App />
        </BrowserRouter>
            
    // </React.StrictMode>
    ,
    document.getElementById('root')
)