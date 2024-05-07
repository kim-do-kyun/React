# Web Programming 07
> useReducer, useContext, useRef, forwardRef, useImperativeHandle, useEffect

<br>

## useReducer
* useState를 대체할 수 있는 함수, 좀 더 복잡한 상태 관리가 필요한경우 사용
* **이전 상태와 Action을 합쳐, 새로운 state를 만드는 조작**
```
import React, { useReducer } from "react";
const [state, dispatch] = useReducer(reducer, initialS할ate, init);
```
* state : 컴포넌트에서 사용할 상태
* dispatch 함수
  * 첫번째 인자인 reducer 함수를 실행시킨다
  * 컴포넌트 내에서 state의 업데이트를 일으키기 위해 사용하는 함수
  * action을 이용하여 컴포넌트 내에서 state의 업데이트를 일으킨다
  * **action**
    * ex1) action type만 정의하여 사용
        ```<button onClick={() => dispatch({ type : "INCREMENT" })}>증가</button>```
    * ex2) action type과 데이터를 정의하여 사용
        ```<button onClick={() => dispatch({ type : "INCREMENT", payload : 1 })}>증가</button>```
* reducer 함수
  * 컴포넌트 외부에서 state를 업데이트 하는 함수
  * 현재 state, action 객체를 인자로 받아, 기존의 state를 대체하여 새로운 state를 반환하는 함수
* initialState : 초기 state
* init : 초기 함수
* useReducer를 활용 한다면 좀더 복잡한 프로세스를 처리할 수 있음
* state를 변경하는 부분이 useState와 같은 경우 내부에 위치하며, useReducer와 같은 경우 외부에 위치한다
* **useReducer 사용**

![스크린샷 2024-05-06 201122](https://github.com/kim-do-kyun/React/assets/70315428/e2f5cb7d-7b0f-49f9-a650-59efe6875828)
* **state 사용**

![스크린샷 2024-05-06 201231](https://github.com/kim-do-kyun/React/assets/70315428/48aff9f2-997d-4f78-b60e-e4999a999fb3)


### 실습화면
![스크린샷 2024-05-06 200931](https://github.com/kim-do-kyun/React/assets/70315428/c2ed546f-bb00-4ea5-a244-4cafcffe3511)


<br>

## useContext
* 전역 데이터를 일일이 props로 단계별로 전달하는 비효율 문제점을 해결
* 상위 컴포넌트의 data가 필요한 하위 컴포넌트들은 useContext훅을 사용해서 해당 데이터를 받아오기만 하면 됨
* Context로 분류한 데이터를 쉽게 받아올 수 있게 도와주는 역할

### 실습화면
* ex1) App 컴포넌트가 가지고 있는 isDark는 전체적인 테마에 관련된 data를 담고 있어 **전역적**, page컴포넌트에게 isDark를 넘겨줌, 하지만 실질적으로는 사용x. 단지 자식 컴포넌트에게 전달만 해주고 있음
* ex2) App 컴포넌트로 돌아가 위 context를 import, page컴포넌트를 만들어준 context의 provider로 감싸줌. context의 provider는 value라는 props를 통해 데이터 전달. ThemeContext 감싸는 모든 하위 컴포넌트는 props를 사용하지않고 value로 접근

![스크린샷 2024-05-06 203945](https://github.com/kim-do-kyun/React/assets/70315428/b5b5cc7e-e6c1-46a3-9046-7811b7918297)

<br>

## useRef
* .current 프로퍼티로 전달된 인자(initialValue)로 초기화된 변경 가능한 ref객체를 반환
* 반환된 객체는 컴포넌트의 전 생애주기를 통해 유지된다
* 저장공간 또는 DOM요소에 접근하기 위해 사용(특정 DOM을 직접 선택할때 사용)

### 실습화면
* ex1) ref up을 눌러도 콘솔에만 뜨지만 state up을 누르면 함께 업데이트 => useRef로 관리하는 값은 값이 변해도 렌더링x, var up 으로 값을 높여놔도 state up으로 변경x => 컴포넌트 내부에 있는 let varCount = 0 이 계속 실행되어 값 초기화

![스크린샷 2024-05-06 211430](https://github.com/kim-do-kyun/React/assets/70315428/8e285898-d581-4dd3-aa60-4c2046376aa3)

* focus버튼을 누르면 input 창에 focus, useRef를 통해 마운트될 때 focus되게 설정해놓을 수 있지만 블로그 포스팅이라는 환경 상 버튼을 누르면 focus되도록함

![스크린샷 2024-05-07 170821](https://github.com/kim-do-kyun/React/assets/70315428/fcd9ce31-7d8e-4e90-8bda-2617215fcce1)
![스크린샷 2024-05-07 170843](https://github.com/kim-do-kyun/React/assets/70315428/62b158f4-82a3-4575-8a6f-ee0b69025600)

<br>

## forwardRef
> (함수형 컴포넌트에서) 부모 컴포넌트에서 자식 컴포넌트 안의 DOM element에 접근하고 싶을때 사용
* 부모 컴포넌트에서 생성된 ref를 자식 컴포넌트에 전달, 이를 통해 부모 컴포넌트가 자식 컴포넌트의 인스턴스에 접근
* **사용이유**
  * 함수형 컴포넌트는 인스턴스가 없기 때문에 ref를 사용할 수 없어 이를 forwardRef로 감싸주면 사용 가능
* **[참고] useRef?**
  * useRef는 DOM element에 직접 접근하기 위해 사용하는 Hook : React는 가상돔을 기반으로 작동하는 라이브러리 이기 때문에 useRef사용
  * 컴포넌트가 마운트될 때 React는 current 프로퍼티에 DOM element를 대입, 언마운트될 때 프로퍼티를 다시 null
  * 실제 DOM에 React노드가 렌더될 때까지 ref가 가리키는 DOM element의 주소 값은 확정x
* **사용법**
1. 부모 컴포넌트에서 useRef()를 선언, 자식 컴포넌트에 보낸다
2. 자식 컴포넌트를 forwardRef()로 감싸고, 부모에서 사용할 함수를 useImperativeHandle()로 감싼다
3. 부모 컴포넌트에서 current 프로퍼티를 통해 함수를 사용

<br>

## useImperativeHandle
* 자식 컴포넌트가 부모 컴포넌트로부터 함수나 메서드를 노출하고 커스터마이징할 때 사용
* 이를 통해 부모 컴포넌트는 자식 컴포넌트 내부의 **특정함수나 메서드에 직접 접근**할 수 있으며, 이를 활용하여 자식 컴포넌트의 인터페이스를 보다쉽게 조작, 노출
* ref로 노출할 대상을 커스텀할 때 사용되는 훅

### 실습화면
* 부모 컴포넌트에게 커스텀 함수 노출

![스크린샷 2024-05-07 182042](https://github.com/kim-do-kyun/React/assets/70315428/5f8ade3f-ec2c-4a16-98c8-a871a60f14d4)

<br>

## useEffect
> 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 실행할 수 있도록 하는 Hook
* 컴포넌트가 mount, unmount, update 됐을 때 특정 작업 처리 즉, 클래스형 컴포넌트에서 사용할 수 있었던 생명주기 메소드를 함수형에서도 사용 가능
* **기본 형태**
  * useEffect(function, deps) - function : 수행하고자 하는 작업, deps : 배열형태, 배열 안에 검사하고자 하는 특정 값 or 빈 배열
1. Component가 mount 됐을 때(처음 나타났을 때)
* 컴포넌트가 화면에 가장 처음 렌더링 될 때 한 번만 실행하고 싶을때 deps에 빈 배열 넣음, 생략한다면 리렌더링 될 때마다 실행
```
useEffect(() => {
  console.log("마운트 될 때만 실행");
}
```
2. Component가 update될 때(특정 props, state가 바뀔 때)
* 특정 값이 업데이트 될 때마다 실행하고 싶을 때는 deps 배열 안에 검사하고 싶은 값을 넣음
* 업데이트 될때만 실행이 아닌 마운트 될때도 실행
```
// 업데이트때만 실행하고 싶을때
// 코드 생략
const mounted = useRef(false);
useEffect(() => {
            if(!mounted.current){
                      mounted.current = true;
            } else {
            //특정 작업 수행
            }
}, [바뀌는 값]);
//코드 생략
```
3. Component가 unmount될 때(사라질 때) or update 되기 직전에
* cleanup 함수 반환(return 뒤에 나오는 함수이며 useEffect에 대한 뒷정리 함수)
* 언마운트 될 때만 cleanup 함수 실행하고 싶을때
  * 두 번째 파라미터로 빈 배열을 넣는다
* 특정 값이 업데이트되기 직전에 cleanup함수를 실행하고 싶을때
  * deps 배열 안에 검사하고 싶은 값을 넣어준다
```
useEffect(() => {
            const fetchData = async() => {
                       const response = await fetch('API_URL');
                       const data = await response.json();
                       setState(data);
            };
            fetchData();
}, [inputValue]);
```
* **useEffect 주의점**
* 무한루프에 빠지지 않도록 의존성 배열을 올바르게 관리해야함
* 내부에서 상태를 변경할때 해당 상태가 의존성 배열에 포함되어 있는지 확인해야함(그렇지 않으면, 상태 변경에 의해 리렌더링, 이는 또 다른 useEffect 호출 야기)
* 기본 사용법
![스크린샷 2024-05-07 183931](https://github.com/kim-do-kyun/React/assets/70315428/553aef1f-2da1-4597-b886-afc05f8438aa)

* 세가지 사용법(코드에 설명)
  * <a href="https://github.com/kim-do-kyun/React/blob/main/0503/Web%20Programming07/src/useEffect/UseEffectTest_loop.js">무한반복</a>
  * <a href="https://github.com/kim-do-kyun/React/blob/main/0503/Web%20Programming07/src/useEffect/UseEffectTest_first.js">처음에만 실행</a>
  * <a href="https://github.com/kim-do-kyun/React/blob/main/0503/Web%20Programming07/src/useEffect/UseEffectTest_independ.js">의존성 배열 사용</a>
* **useEffect - cleanup**
* 이벤트 등록 후 호출되지 않으면 사라지지 않음 따라서 이를 처리하는 방법이 필요
* return을 사용하지 않으면 새로운 useEffect를 수행하기 전에 아무런 작업을 하지 않는 것으로 인식
* 또한 의존성 배열이 []로 되어있으면 첫 렌더링 시에만 동작. 따라서 return에 작성된 내용은 컴포넌트가 최종적으로 DOM에서 unmount되는 시점에만 수행
* 이에 반해 의존성 배열 내에 특정 변수(의존성)이 존재하면 변경될때마다 useEffect가 재수행되어 cleanup함수 또한 계속 실행

<br>

## useLayoutEffect
### useEffect VS useLayoutEffect
* useEffect
  * 컴포넌트들이 render와 paint 된 후 실행(비동기적) => 화면의 깜빡임
* useLayoutEffect
  * 컴포넌트들이 render된 후 실행, 그 후 paint(동기적) => 화면의 깜빡임x
* 둘의 형태는 동일하지만 useEffect의 이펙트는 DOM이 그려진 이후 호출, useLayoutEffect는 그려지기 전 호출
* 스크롤 위치를 찾거나 어떤 element의 스타일 요소를 변경하는 등 직접적으로 DOM을 조작하는 곳 제외 useEffect 추천
* useEffect 사용후 문제가 생기면 그때 useLayoutEffect사용(공식 문서)

<br>

## useInsertionEffect
> CSS-in-JS 방식을 사용하는 라이브러리를 위한 Hook
* DOM 업데이트 이전에 호출되는 useEffect의 한 형태, 클라이언트사이드에서만 실행
* 사용하는 경우
  * CSS-in-JS 라이브러리를 사용하는 경우
  * 렌더링 전 다크모드 여부를 결정해야 할 경우
```
import { useInsertionEffect } from 'react';

// 컴포넌트
function MyButton() {
            function useCSS(rule) {
            useInsertionEffect(() => {
            // ... <style> 태그를 여기에서 주입하세요 ...
            });
                        return rule;
            }
   const className = useCSS('...');
   return <div className={className} />;
}
```