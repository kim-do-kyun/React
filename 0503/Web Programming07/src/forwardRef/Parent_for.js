import { useRef } from 'react'
import Child from './Child'

const Parent = () => {
    const compRef = useRef()

    const fnReqBtn1 = e => {
        e.preventDefault();

        compRef.current.req1();
    }

    const fnReqBtn2 = e => {
        e.preventDefault();

        compRef.current.req2();
    }

    return (
        <>
            <Child ref={compRef} />
            <Link onClick={fnReqBtn1}>가입버튼1</Link>
            <Link onClick={fnReqBtn2}>가입버튼2</Link>
        </>
    )
}

export default Parent;