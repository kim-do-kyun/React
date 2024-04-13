import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// 화살표 함수로 컴포넌트를 정의합니다
const TitleParts = (props) => (
  <div style={{backgroundColor:'red', color:'white'}}>
    <h3>{props.title}</h3>
  </div>
)
const ContentParts = (props) => (
  <div style={{border:'1px solid blue', margin:15}}>
    <div>줄거리:{props.body}</div>
  </div>
)
// 메인 컴포넌트
const Book = (props) => (
  <div>
    <TitleParts title = {props.title}/>
    <ContentParts body = {props.body}/>
  </div>
)
root.render(
  <React.StrictMode>
    <div>
      <Book title='삼국지' body='옛날 중국 이야기' />
      <Book title='민수기' body='옛날 이스라엘 이야기'/>
      <Book title='서유기' body='원숭이가 활약하는 이야기'/>
    </div>
    <App/>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
