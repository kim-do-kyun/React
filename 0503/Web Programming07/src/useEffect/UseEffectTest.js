import { useEffect } from "react";

export default function UseEffectTest(){
    console.log("useEffect 전");

    // useEffect도 함수기 때문에 함수 호출
    useEffect(() => {
        console.log("메롱으로 바꿀거지롱");
        const hi = document.getElementById("hi");
        hi.innerText = "메롱"
    });

    console.log("useEffect 후")
    return (
        <div className="App">
            <h1 id = "hi">안녕하세요</h1>
        </div>
    )
}