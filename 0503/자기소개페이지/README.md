# Custom hook을 사용해서 자기소개 페이지 구성하기
> 메모할수 있는 기능을 추가
<hr>

* Custom hook 구성
```
import { useState } from 'react';

// 메모를 관리하는 커스텀 훅
function useMessages() {
  // 메모 목록을 저장할 상태
  const [messages, setMessages] = useState([]);

  // 새 메모 추가하는 함수
  const addMessage = (message) => {
    setMessages([...messages, message]);
  };

  // 메모 삭제하는 함수
  const removeMessage = (index) => {
    setMessages(messages.filter((_, i) => i !== index));
  };

  // 메모 목록과 메모를 추가/삭제하는 함수를 반환
  return {
    messages,
    addMessage,
    removeMessage,
  };
}

export default useMessages;

```

* 위에서 구현한 커스텀 훅을 메시지입력 등으로 구성

![스크린샷 2024-05-08 161153](https://github.com/kim-do-kyun/React/assets/70315428/77b0ff37-b157-4bef-81d8-735abb9bf018)
