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
