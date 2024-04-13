# :books: Component, Props(추가 진도)

* **재사용 가능한 Component를 많이 갖고 있을수록 개발속도가 빨라진다!**

### 과제
* <a href="">자기소개 페이지</a> 
* <a href="">회원가입 페이지</a>

<br>

### 수업진도(4단원)
* <a href="">리스트 컴포넌트</a>
* <a href="">화살표 함수</a>
* <a href="">댓글 컴포넌트 만들기</a>

<br>

### 수업진도(5단원)
* <a href="">카운터</a>
* <a href="">너비와 높이 증가시키기</a>
* <a href="">스톱워치 만들기</a>
* <a href="">여러 개의 입력 항목을 가진 입력 양식 만들기</a>
  
<br>

# :books: Component State
### 상태(state)
>React Component의 변경 가능한 데이터

* State는 간단하게 말해서 **변수**이다. const, let 등으로 선언한 변수와는 다르게 **값이 변하면** 관련 있는 컴포넌트들이 **재랜더링**되어 화면이 바뀐다
* 프로퍼티(props)의 특징은 컴포넌트 내부에서 값을 바꿀 수 없다는 것이었지만 값을 바꿔야 하는 경우도 분명 존재하며 이럴때 state를 사용한다

### 정리
* setState는 비동기적으로 작동
* state에 직접적으로 값을 설정하면 안된다!!
```
// 잘못된 방법
this.state.count = count + 1;
this.state.comment = 'Hello';
```
* Event handling
  * 소문자 대신 카멜케이스(camelCase)를 사용
  * JSX를 사용하여 문자열이 아닌 함수로 이벤트 핸들러를 전달
* Component Life Cycle(생명 주기)
  * Component가 생성되는 시점과 사라지는 시점이 정해져 있다
  * &lt;Mounting&gt;
    * Component가 생성되는 시점
    * Class Coponent를 사용할 경우 Component의 constructor 즉 생성자가 실행된다
  * &lt;Updating&gt;
    * Component의 props가 변경되거나 setState함수 호출에 의해 state가 변경되거나 falseUpdate라는 강제 업데이트 함수 호출로 인해 Component가 다시 렌더링된다
  * &lt;Unmoungint&gt;
    * 상위컴포넌트를 더이상 화면에 표시하지 않게 될 때 unmount 된다