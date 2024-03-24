# :mag: React 시작하기

### 리액트란?
* 사용자 인터페이스를 구축하기 위한 선언적이고 효율적이며 유연한 JavaScript 라이브러리
* 가상 DOM(Document object model)과 JSX(JavaScript XML) 방식으로 동작하는 프레임워크

<br>

### React 장점
* 완성도 높고 이해하기 쉬운 개발 워크플로우
* 뛰어난 유연성과 호환성
* 손쉬운 컴포넌트 재사용성
* Virtual DOM으로 한층 강화된 고성능
* Flux와 Redux의 힘
* 다양한 툴 제공
* React Native의 강력한 기능
* HTML 확장을 위한 JSX구문
* React Hook

<br>

### 개발을 위한 VScode 확장 프로그램
![스크린샷 2024-03-24 164612](https://github.com/kim-do-kyun/React/assets/70315428/b653b21d-a4de-4c3e-b245-fd187816a5e4)

<br>

### npm, npx, nvm, yarn
* **npm(Node Package Manager)**
  * nodejs에서 사용하는 모듈들을 관리하고 배포하는 패키지 관리자
  * nodejs에서 자주 쓰이는 코드들을 패키지로 만들어 배포하는 저장소
* **npx(Node Package Execute)**
  * npm을 더 편하게 사용하기 위한 도구
  * npm이 패키지 설치와 관리를 돕는다면, npx는 패키지를 더 쉽게 실행할 수 있게 도와줌
  * 외부 패키지에 포함된 실행 파일을 실행할 때 사용
* **nvm(Node Version Manager)**
  * nodejs 버전을 여러 개 사용할 때 편리
* **Yarn(Yet Another Resource Negotiator)**
  * nodejs 자바스크립트 런타임 환경을 위해 페이스북이 개발

<br>

### 개발모드 VS 프로덕션 모드
* **개발 모드**
  * 프로젝트 개발 시 적용
  * npm start
* **프로덕션 모드**
  * 개발 완료 후 사용자에게 실제 서비스를 하려고 할 때 적용
  * npm run build

<br>

### Publishing
**Deploy**(프로그램 등을 서버와 같은 기기에 서리하여 서비스 등을 제공)
1. package.json 편집 ("homepage":".", 추가)
2. npm run build
3. [npm install -g serve]
4. serve -s build
   * (serve라는 웹서버를 생성해서 실행시킬 때 build를 document **root**로 하겠다는 뜻)
5. build 폴더 사용
* **github에 build폴더 옮겨 띄울 수 있음**

**사진 자료 출처 : 웹프로그래밍 수업 ppt 자료**