import { useState, useTransition } from "react"

let a = new Array(10000).fill(0)

function App_transition() {
    let [name, setName] = useState('')
    let [isPending, startTransition] = useTransition()

    return (
        <div>
            <input onChange={ (e) => {
                startTransition(() => {
                    setName(e.target.value)
                })
            }}/>
            {
                isPending ? "로딩 중" :
                a.map(() => {
                    return <div>{name}</div>
                })
            }
        </div>
    )
}

export default App_transition;

// useTransition() 쓰면 그 자리에 [변수, 함수]가 남는다
// 그 중 우측에 있는 startTransition() 함수로 state 변경함수 같은걸 묶으면 그걸 다른 코드들보다 나중에 처리
// 그래서 <input> 타이핑같이 즉각 반응해야하는걸 우선적으로 처리