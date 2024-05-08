import { useDeferredValue, useState } from "react";

export default function Home() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);

    const deferredValue = useDeferredValue(count2);

    const onIncrease = () => {
        setCount1(count1 + 1);
        setCount2(count2 + 1);
        setCount3(count3 + 1);
        setCount4(count4 + 1);
    }

    console.log({count1});
    console.log({count2});
    console.log({count3});
    console.log({count4});
    console.log({deferredValue});

    return <button onClick={onIncrease}>클릭</button>
}