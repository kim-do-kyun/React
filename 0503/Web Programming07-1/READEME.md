# Web Programming 07-1
> useMemo, useCallback, useTransition, use, useDebugValue, useId, useSyncExternalStore, Custom Hook

<br>

## useMemo
> 동일한 값을 리턴하는 함수를 반복적으로 호출할 경우 맨 처음 값을 메모리에 저장해서 필요할때마다 메모리에서 꺼내서 재사용

```
const value = useMemo(() => {
         return calculate();
}, [item])
```
* useMemo는 두 개의 인자를 받음. 첫번째는 콜백, 두번째는 배열
* 첫번째 인자인 콜백함수는 메모이제이션을 해줄 값을 계산해서 리턴해 주는 함수 => useMemo가 리턴하는 값
* 두번째 인자인 배열은 의존성 배열, 배열안의 요소의 값이 업데이트될때만 콜백함수 호출해서 메모이제이션 된 값을 업데이트
* 빈 배열을 넘겨주면 컴포넌트가 처음 마운트 되었을 때만 값을 계산, 이후 항상 메모이제이션 된 값을 꺼내와서 사용
* useMemo를 사용하는 것은 값의 재사용이기때문에 메모리 소비, 불필요한 값도 메모이제이션 하면 성능에 좋지않으니 **적절할 때만 사용**

### 실습화면
![스크린샷 2024-05-07 195940](https://github.com/kim-do-kyun/React/assets/70315428/b983bca6-6395-4f07-a8d4-ce79bd6a73f2)

<br>

## useCallback
> useCallback 첫번째 인자로 전달된 함수를 메모이제이션하고, 컴포넌트가 재렌더링될 때마다 새로 생성되지 않고, 의존성 배열에 명시된 값이 변경될 때만 함수가 새로 생성
* React에서 컴포넌트가 재랜더링될 때, 그 컴포넌트 내에 정의돈 모든 함수들은 새로 생성 => 자식 컴포넌트는 props가 변경되었다고 인식하여 불필요한 재랜더링
* 이러한 문제는 js의 함수가 클로저(closure)라는 특성 때문에 발생(클로저는 함수가 생성된 시점의 환경을 **기억**한다)

### 실습화면
* 컴포넌트 생성후 침실 토글 버튼 클릭하면 콘솔에는 모든 방에대한 Light 컴포넌트 함수가 호출

![스크린샷 2024-05-07 202126](https://github.com/kim-do-kyun/React/assets/70315428/d49d74b1-71c5-4392-8402-3aa8f66cfacf)

* Light 컴포넌트에 React.memo사용, toggle함수들에게 useCallback함수 적용 => 토글한 컴포넌트만 리랜더링

![스크린샷 2024-05-07 203524](https://github.com/kim-do-kyun/React/assets/70315428/9838be34-1955-409c-a991-ac5b94abaad2)

<br>

## useTransition
> UI를 차단하지 않고 상태를 업데이트 할 수 있는 리액트 훅
* 컴포넌트 최상위 수준에서 호출되어 startTransition을 통해 우선순위가 낮은 업데이트들을 transition이라고 표시해 리액트가 UI 렌더링시 우선순위에 따라 업데이트 할 수 있도록 한다. 이로써 렌더링이 오래걸리는 컴포넌트의 블락을 피할수 있게 된다
```
const[isPending, startTransition] = useTransition();
```
* useTransition은 두개의 항목이 있는 배열을 반환
  * isPending 플래그는 대기중인 transition이 있는지 알려줌
  * startTransition 함수는 상태 업데이트(setState)를 transition으로 표시해주는 함수
* useDeferredValue()
  * 특정 값의 처리 우선순위를 낮추어 렉 현상을 줄여 사용자경헙(UX)을 향상시키는 목적
  * 사용법
    ```
    const [state, setState] = useState('');
    const deferredState = useDeferredValue(state);
    ```
  * 보통 useState()와 함께 사용, useState()로 생성된 state값을 인자로 사용하여 상태 업데이트의 처리 우선순위를 낮추고 다른 작업을 동시적으로 처리하도록 한다

### 실습화면
* &lt;input&gt;타이팡 같은 즉각 반응해야하는걸 우선적으로 처리하게함(useTransition)

![스크린샷 2024-05-08 144223](https://github.com/kim-do-kyun/React/assets/70315428/29ce7152-d634-4d2b-8257-f5cb55ca0cdc)

* count2의 값을 가장 낮은 우선순위로 상태를 변경 하고 싶을때 useDeferredValue로 count2를 래핑해서 deferredValue의 값은 가장 나중에 변경

![스크린샷 2024-05-08 144816](https://github.com/kim-do-kyun/React/assets/70315428/b9092693-3d77-4eb1-8d02-1ff8f4162428)

<br>

## use
> Promise를 정의하는 데 필요한 상용구 코드의 양을 줄여 데이터 가져오기 프로세스를 단순화하도록 설계된 솔루션
```
// 'use' inside of a React componenet or Hook...
const data = use(promise);

// ...roughly equates to 'await' in a async funtion
const data = await promise;
```
* useHook은 조건, 블록, 루프 내부에서 호출할 수 있음
* promise을 인수로 전달하여 데이터를 비동기적으로 가져올 수 있음

<br>

## useDebugValue
> React DevTools에서 사용자 지정 hook에 label을 추가할 수 있는 React Hook(아무것도 return하지 않는다)
```useDebugValue(value, format?)```
* value : React DevTools에 보여주고 싶은 값으로 어떤 타입니든 가능
* optional format : formatting 함수, 컴포넌트 검사시 사용. 해당 함수 작성하지 않은 경우 value그 자체가 보여짐
* **사용법**
* Adding a label to a custom Hook
  * 커스텀 훅의 최상위 레벨에서호출, 아래의 예시에서 useDebugValule를 사용하지 않으면 Online대신 true가 보여질 것이다
  ```
  import { useDebugValue } from 'react';
  function useOnlineStatus() {
    //...
    useDebugValue(isOnline ? 'Online' : 'Offline');
    //...
  }
  ```
* Deferring formatting of a debug value
  * 두번째 매개변수로 formatting함수를넘기고, 컴포넌트를 검사할때 해당 함수를 호출하여 formatting된 value를 반환
  ```useDebugValue(date, date => date.toDateString());```

<br>

## useId
> React에서 일반적인 JS변수를 사용하면 ID가 매번 재생성될 수 있는 문제를 해결하기 위해 도입
* 유니크한 id가 있는경우 굳이 사용x
* 아래와 같이 컴포넌트의 최상단에서 useId를 호출하여 고유 ID값을 생성, 생성된 ID를 다른 속성에 전달
```
import { useID } from 'react';
function PasswordField() {
  const passwordHintId = useId();
  // ...
  <>
    <input type="password" aria-describedby={passwordHintId} />
    <p id={passwordHintId}>
  </>
```

<br>

## useSyncExternalStore
> React가 외부 저장소의 변경사항을 "구독"할 수 있도록 도와주는 훅
* 리액트에서 동시성 렌더링이 가능해져 외부 저장소의 데이터를 참조하는 컴포넌트를 렌더링할때 같은 시기에 렌더링을 했지만, 서로 다른 시점의 데이터를 참조할 수도 있는 Data Tearing문제 해결
* 직관적으로 use + sync external stroe, 외부 스토어와 싱크를 맞추는 훅
* 훅 시그니쳐
```
useSyncExternalStore(
  subscribe: (callback) => Unsubscribe,
  getSnapshot: () => State,
  getServerSnapshot?: () => State
)
```
* subscribe : 콜백함수를 받아 스토어에 등록하는 용도로 사용
* getSnapshot : 컴포넌트에 필요한 현재 스토어의 데이터를 반환하는 함수
* getServerSnapshot : 옵셔널 값으로, 서버 사이드 렌더링 하이드레이션 하는 도중에만 사용

<br>

## Custom Hook
> 개발자가 직접 작성하여 새로운 Hook을 생성하는 것
* Custom Hook을 작성하기 위한 규칙
  * 조건문, 반복문 등에서 호출될 수 없고 컴포넌트 최상단에서만 호출 가능하다
  * React 컴포넌트 함수 내에서만 호출되어야 한다
  * 함수 이름의 접두어는 반드시 'use'로 지정해야한다