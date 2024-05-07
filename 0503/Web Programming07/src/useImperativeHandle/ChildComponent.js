import { useImperativeHandle } from "react";

function ChildComponent(props, ref) {
    useImperativeHandle(ref, () => {
        return {
            getText: () => 'useImpereativeHandle 테스트'
        };
    });

    return <span>children ref 테스트</span>
}

export default ChildComponent;