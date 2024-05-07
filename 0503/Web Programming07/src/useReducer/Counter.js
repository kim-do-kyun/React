import React, { useReducer, useState } from "react"

//init 함수를 사용하지 않는 counter
function reducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return { count : state.count + action.payload};
        case "DECREMENT":
            return { count : state.count - action.payload};
        case "RESET":
            return init(action.payload);
        default:
            throw new Error("unsupported action type: ",action.type);
    }
}

const Counter = ({initialCount}) => {
    // const initialState = {count:0};
    // const [state, dispatch] = useReducer(reducer, initialState);
    const [state, dispatch] = useReducer(reducer, initialCount, init);

    return (
        <>
            <h2>{state.count}</h2>
            <button onClick={() => dispatch({ type: "RESET", payload:0})}>초기화</button>
            <button onClick={() => dispatch({ type: "INCREMENT", payload:1})}>증가</button>
            <button onClick={() => dispatch({ type: "DECREMENT", payload:1})}>감소</button>
            <button onClick={() => dispatch({ type: "kkkkkkkkk ",payload:1})}>에러</button>
        </>
    );
};

function init(initialState) {
    //return { count: initialState};
    return {count:0};
}

//useState사용
// const Counter = ({ initialCount }) => {
//     const initial = initialCount ? initialCount : 0;
//     const [count, setCount] = useState(initial);

//     const onIncrease = () => {
//         setCount((count) => count + 1);
//     };

//     const onDecrease = () => {
//         setCount((count) => count - 1);
//     }
//     return (
//         <>
//             <h2>Count: {count}</h2>
//             <button onClick={() => setCount(initial)}>초기화</button>
//             <button onClick={onIncrease}>증가</button>
//             <button onClick={onDecrease}>감소</button>
//         </>
//     )
// }


export default Counter;