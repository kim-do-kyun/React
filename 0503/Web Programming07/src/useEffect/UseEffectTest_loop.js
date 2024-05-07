import { useEffect, useState } from "react"

export default function UseEffectTest_loop() {
    const [count, setCounter] = useState(0);

    useEffect(() => {
        console.log('useEffect: ${Date()}');
    });

    const countHandler = (e) => {
        setCounter((s) => s+1);
    };

    return (
        <div className="App">
            <h1 id="hi">{count}</h1>
            <button onClick={countHandler}>카운터 증가</button>
        </div>
    )
}

// 위 코드는 맨처음 렌더링, 그리고 매 재렌더링 마다 실행되는 useEffect문
// 특징으로는 useEffect 함수에 특정 콜백을 전달하는 정도, 이 콜백 함수는 매 렌더링이 이루어지고 나서 실행