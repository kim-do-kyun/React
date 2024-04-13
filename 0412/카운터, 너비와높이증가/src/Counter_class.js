import React, { Component } from 'react'

export default class Counter_class extends Component {
  constructor(props){
    super(props);

    //state 초기값 설정
    this.state={
      count:0
    };
  }
  render() {
    const{count} = this.state;
    return (
      <div>
        <h2>현재 Count : {count}</h2>
        <button onClick={() => {
          this.setState({count:count+1})
        }}>카운트 +1</button>
      </div>
    );
  }
}
