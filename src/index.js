import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Parent from "./prop-drilling";
import ThemeProvider from "./context";
import ParentWithContext from "./context-example";

ReactDOM.render(
    <React.StrictMode>
        <div style={{textAlign:"center"}}>
            <ThemeProvider>
                <h4>With Context api</h4>
                <ParentWithContext/>
            </ThemeProvider>
            <h4>Without Context api</h4>
            <Parent/>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
