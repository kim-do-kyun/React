import { forwardRef, useRef } from "react";
import MyInput from "./MyInput";

const ForwardedMyInput = forwardRef(MyInput);
function Form() {
    const ref = useRef(null);
    function handleClick() {
        // useImperativeHandle에서 focus만 노출시키고 있다
        // ref.current에서 input 관련 다른 변수나 함수 접근 시도 시 에러 발생
        ref.current.focus();
    }
    return (
        <form>
            <ForwardedMyInput ref={ref} />
            <button type="button" onClick={handleClick}>Edit</button>
        </form>
    )
}

export default Form;
