import React, {useState, useRef} from "react";

const InputSample = () => {
    const [inputs, setInputs] = useState({
        이름: "",
        nickname: "",
    });

    const nameFocus = useRef();

    const { 이름, nickname } = inputs;

    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs
            [name] = value,
        });
    };

    const onReset = () => {
        setInputs({
            이름: "",
            nickname: "",
        });
        nameFocus.current.focus();
    };
    return (
        <div>
            <input
            name = "이름"
            placeholder="이름쓰세요"
            onChange={onchange}
            value={이름}
            ref={nameFocus}
            />
            <input
            name="nickname"
            placeholder="닉네임쓰세요"
            onChange={onChange}
            value={nickname}
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값:</b>
                {이름}({nickname})
            </div>
        </div>
    )
}

export default InputSample;