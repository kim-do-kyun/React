import { useDebugValue, useState } from "react";

function useCounter(initialValue) {
    const [count, setCount] = useState(initialValue);

    useDebugValue(count, count => 'Count: ${count}');

    function handleIncrement() {
        setCount(count + 1);
    }
    function handleDecrement() {
        setCount(count - 1);
    }

    return {
        count,
        handleIncrement,
        handleDecrement
    };
}

export default useCounter;