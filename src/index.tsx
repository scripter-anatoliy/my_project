import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./state/store";

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);


reportWebVitals();
