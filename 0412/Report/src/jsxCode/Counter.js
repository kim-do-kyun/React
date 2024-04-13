import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props){
        super(props)
        //state 초기값 설정
        this.state = {
            count : 0
        }
    }
  render() {
    const {count} = this.state
    return (
      <div>
        <h3>방문자 수 : {count}</h3>
        <button onClick={()=>{
            this.setState({count:count+1})
        }}>방문자+1</button>
        {/* <button onClick={()=>{
            this.setState({count:count-1})
        }}>방문자-1</button> */}
      </div>
    )
  }
}
