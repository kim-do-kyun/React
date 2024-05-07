import { useEffect, useState } from "react"

export default function UseEffectTest_independ() {
    const [firstCount, setFirstCounter] = useState(0);
    const [secondCount, setSecondCounter] = useState(0);

    useEffect(() => {
        console.log('useEffect: ${Date()}');
    }, [firstCount]);

    const firstCountHandler = (e) => {
        setFirstCounter((s) => s+1);
    };

    const secondCountHandler = (e) => {
        setSecondCounter((s) => s+1);
    };

    return (
        <div className="App">
            <h1>{firstCount}</h1>
            <button onClick={firstCountHandler}>카운터 증가</button>
            <h1 id="hi">{secondCount}</h1>
            <button onClick={secondCountHandler}>카운터 증가</button>
        </div>
    )
}

// state를 2개 만들고, 두번째 인자는 firstCount가 배열에 들어 이를 의존성 배열이라고함
// 단순히 해당 컴포넌트가 재렌더링될 때 useEffect실행이 아닌 의존성 배열에 존재하는 데이터가 변경될 때만 실행
// 즉, 위 코드의 useEffect는 firstcount가 변경되는 firstCountHandler 이벤트 핸들러가 호출될 때만 실행(처음 렌더링때도 실행)