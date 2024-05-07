import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './useReducer/Counter';
import App_useRef from './useRef/App_useRef';
import InputSample from './useRef/InputSample';
import DOMFocus from './useRef/DOMFocus';
import Form from './useImperativeHandle/Form';
import ParentComponent from './useImperativeHandle/ParentComponent';
import UseEffectTest from './useEffect/UseEffectTest';
import UseEffectTest_loop from './useEffect/UseEffectTest_loop';
import UseEffectTest_first from './useEffect/UseEffectTest_first';
import UseEffectTest_independ from './useEffect/UseEffectTest_independ';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Counter/> */}
    {/* <App_useRef/> */}
    {/* <InputSample/> */}
    {/* <DOMFocus/> */}
    {/* <Form/> */}
    {/* <ParentComponent /> */}
    {/* <UseEffectTest /> */}
    {/* <UseEffectTest_loop /> */}
    {/* <UseEffectTest_first /> */}
    <UseEffectTest_independ />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
