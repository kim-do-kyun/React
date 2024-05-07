import { useImperativeHandle, useRef } from "react";

function MyInput(props, ref){
    const inputRef = useRef(null);

    useImperativeHandle(ref, () => {
        return {
            focus() {
                inputRef.current.focus();
            }
        }
    })

    return <input type="text" ref={inputRef} />;
}

export default MyInput;