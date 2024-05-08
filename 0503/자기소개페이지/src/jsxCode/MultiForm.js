import React, { Component, useState } from 'react'; // useState 추가
import Createh2 from './Createh2';
import useMessages from './useMessages';

const section = {
    marginBottom: "24px"
};

// MultiForm 클래스 컴포넌트
export default class MultiForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '김도균',
            age: 24,
        };
    }

    doChange(e) {
        const userValue = e.target.value;
        const key = e.target.name;
        this.setState({ [key]: userValue });
    }

    doSubmit(e) {
        e.preventDefault();
        const j = JSON.stringify(this.state);
        window.alert(j);
    }

    render() {
        return (
            <section style={section}>
                <form onSubmit={(e) => this.doSubmit(e)}>
                    <Createh2 text='✒️방명록'></Createh2>
                    <div>
                        <label>
                            이름 : <br />
                            <input
                                name='name'
                                type='text'
                                value={this.state.name}
                                onChange={(e) => this.doChange(e)} />
                        </label>
                    </div>
                    <div>
                        <label>
                            나이 : <br />
                            <input
                                name='age'
                                type='number'
                                value={this.state.age}
                                onChange={(e) => this.doChange(e)} />
                        </label>
                    </div>
                    <input type='submit' value='전송' />
                </form>
                <form>
                    <Createh2 text='📝메모장'></Createh2>
                </form>
                <MessageApp />
            </section>
        );
    }
}

// MessageApp 함수 컴포넌트
function MessageApp() {
    const { messages, addMessage, removeMessage } = useMessages();
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        addMessage(input);
        setInput('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="메모를 입력하세요"
                />
                <button type="submit">추가</button>
            </form>
            <ul>
                {messages.map((message, index) => (
                    <li key={index}>
                        {message}
                        <button onClick={() => removeMessage(index)}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// export { MessageApp }; // MessageApp 컴포넌트를 export
