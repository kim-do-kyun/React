import React, { useState } from 'react'
import './Signup.css';

export default function Signup() {
    
    const [id, setID] = useState('');
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [pwCk, setPwCk] = useState('');

    const onSubmit = (e) => {
        if (pw == pwCk && id != '' && pw != ''){
            console.log({id}, {email}, {pw})
            window.alert('회원가입 성공')
        }else{
            window.alert('비밀번호가 일치하지 않습니다')
        }
    }

    const onChangeId = (e) => {
        setID(e.target.value);
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const onChangePw = (e) => {
        setPw(e.target.value);
    }
    const onChangePwCk = (e) => {
        setPwCk(e.target.value);    
    }


  return (
    <div>
        <div className="container">
        <h2>회원가입을 위해<br></br>정보를 입력해주세요.</h2>
        <form onSubmit={onSubmit}>
                <label for="name">이름 <input type='text' id='idInput' value={id} onChange={onChangeId}></input></label>
                <label for="email">이메일 <input type='text' id='emailInput' value={email} onChange={onChangeEmail}></input></label>
                <label for="password1">비밀번호 <input className='pw' type='password' id='pwInput' value={pw} onChange={onChangePw}></input></label>
                <label for="password2">비밀번호 확인 <input className='pw' type='password' id='pwckInput' value={pwCk} onChange={onChangePwCk}></input></label>
            <button>가입완료</button>
        </form>
        </div>
    </div>
  )
}
