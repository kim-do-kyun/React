# :page_with_curl: 리스트컴포넌트, 화살표 함수
## 실행화면

### <리스트 컴포넌트>
![리스트](https://github.com/kim-do-kyun/React/assets/70315428/b8edb84b-1385-4818-ba28-567e3955e7c9)

<br>

### <화살표 함수>
![책](https://github.com/kim-do-kyun/React/assets/70315428/2db7bbf7-9d90-408e-9564-1c55ccfaf585)

* **화살표 함수**는 익명 함수를 선언하여 변수에 대입하는 방법과 유사하다
* 기존 함수 표현법
```
function add(first, second){
    return first + second;
}

var add = function(first, second){
    return first + second;
}
```

* 화살표함수 사용시
```
let add = (first, second) => {  // ()안에 파라미터
    return first + second;      // first 더하기 second 반환
}

let add = (first, second) => first + second;    // 바로 반환

let addAndMultiple = (first, second) => ({ add:first+second, multiply:first*second});   // 객체 반환
```