import { useEffect, useState } from "react"

export default function UseEffectTest_first() {
    const [count, setCounter] = useState(0);

    useEffect(() => {
        console.log('useEffect: ${Date()}');
    }, []);

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

// loop와 동일하지만 useEffect 부분에 두번째 빈 매열 생성 => 최초 렌더링 될 때만 useEffect 실행
// 초기에 무언가 할 때 유용