import React from 'react';
import './App.css';
import {Routes} from "./Routes/Routes";
import {authTC} from "./state/reducers/AuthReducer";
import {useDispatch} from "react-redux";

export const App = () => {

    const dispatch = useDispatch();
    dispatch(authTC()); 

    return (
        <div className="App">
            <Routes/>
        </div>
    )
};

export default App;
