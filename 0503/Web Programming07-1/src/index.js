import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Practice from './useMemo/Practice';
import App_Callback from './useCallback/App_Callback';
import App_transition from './useTransition/App_transition';
import Home from './useTransition/Home';
import useCounter from './useDebugValue/useCounter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Practice /> */}
    {/* <App_Callback/> */}
    {/* <App_transition/> */}
    {/* <Home /> */}
    <useCounter />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
