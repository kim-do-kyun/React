import { forwardRef, useEffect, useRef } from "react";
import ChildComponent from "./ChildComponent";

const ForwardedChild = forwardRef(ChildComponent);

function ParentComponent() {
    const childRef = useRef(null);

    useEffect(() => {
        console.log(childRef.current?.getText()); //'useImperativeHandle 테스트'
    })

    return (
        <div>
            <ForwardedChild ref={childRef} />
        </div>
    )
}

export default ParentComponent;