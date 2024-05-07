import { useRef } from 'react'
import Child from './Child'

const Parent = () => {
    const compRef = useRef()
    
    return (
        <Child ref={compRef} />
    )
}

export default Parent; 