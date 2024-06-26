# :books: Component
* Component : 입력(props)을 받아 출력(Element)하는 역할
* 이러한 Component들을 마치 레고 블록을 조립하듯 끼워 맞춰 새로운 Component를 만들 수 있다
* 리액트 컴포넌트
  * Class Component
    * class라는 것을 사용해서 만들어진 형태
  * Function Component
    * pure 함수같은 역할(일종의 함수)
* Component의 이름은 항상 **대문자**로 시작해야한다(소문자는 DOM태그로 인식하기 때문)

<br>

## :blue_book: Props(프로퍼티)
* 상위 컴포넌트가 하위 컴포넌트에 값을 전달할때 사용
* React 컴포넌트는 props를 이용해 서로 통신한다

<br>

## :pencil: <a href="https://kim-do-kyun.github.io/React/0405/build">과제</a>
>웹 사이트를 5개 이상의 컴포넌트로 구성하고,
>2개 이상의 props를 전달하는 컴포넌트를 하나 이상 포함하기
* 파란부분 클릭시 각각의 정보위치로 이동(과제의 경우 웹 사이트로 이동)

#### 컴포넌트들
* 공통되는 INFO, SKILLS, CONTACT(h2)태그들은 <strong><a href = "https://github.com/kim-do-kyun/React/blob/main/0405/src/jsxCode/Createh2.js">Createh2.js</a></strong>에게 props전달 후 받음
##### <a href = "https://github.com/kim-do-kyun/React/blob/main/0405/src/jsxCode/Header.js">Header.js</a>
* 자기소개페이지 제일 윗부분인 사진, 이름, 학번, 학과 등을 구성
##### <a href = "https://github.com/kim-do-kyun/React/blob/main/0405/src/jsxCode/Infos.js">Infos.js</a>
* 코드 구성시 <strong><a href="https://github.com/kim-do-kyun/React/blob/main/0405/src/jsxCode/CreateInfo.js">CreateInfo.js</a></strong>에게 : 기준으로 왼쪽 props, 오른쪽 props를 넘겨 css를 입힌 후 받음
##### <a href = "https://github.com/kim-do-kyun/React/blob/main/0405/src/App.js">App.js</a>
* 기본 구성이되는 css스타일을 카멜케이스로 구현하고, 구현했던 컴포넌트들을 이용해서 배치함
