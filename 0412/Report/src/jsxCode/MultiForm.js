import React, { Component } from 'react'
import Createh2 from './Createh2'

const section = {
    marginBottom : "24px"
  }
// 여러개의 입력 항목을 가진 컴포넌트
export default class MultiForm extends Component {
    constructor(props){
        super(props)
        // 입력 양식의 초깃값을 설정합니다
        this.state = {
            name : '김도균',
            age : 24,
        }
    }
    // 값이 변경됐을 때
    doChange (e) {
        const userValue = e.target.value
        const key = e.target.name
        this.setState({[key]:userValue})
    }
    // 전송 버튼을 눌렀을 때
    doSubmit (e) {
        e.preventDefault() 
        const j = JSON.stringify(this.state)
        window.alert(j)
    }
    
  render() {
    // 이벤트를 메서드에 바인딩
    const doSubmit = (e) => this.doSubmit(e)
    const doChange = (e) => this.doChange(e)
    return (
        <section style = {section}>
        <form onSubmit={doSubmit}>
            <Createh2 text='✒️방명록'></Createh2>
            <div><label>
                이름 : <br/>
                <input name='name'
                type='text'
                value={this.state.name}
                onChange={doChange} />
            </label></div>
            <div><label>
                나이 : <br/>
                <input name='age'
                type='number'
                value={this.state.age}
                onChange={doChange}/>
            </label></div>
            <input type='submit' value='전송' />
        </form>
        </section>
    )
  }
  
}
