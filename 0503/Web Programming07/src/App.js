import { useState } from 'react';
import './App.css';
import Page from "./useContext/Page"
import { ThemeContext } from './context/ThemeContext';

function App() {
  // 현재 App이 다크모드인지 아닌지 true, false로 정보를 받고 있다.
  const [isDark, setIsDark] = useState(false);

  // Page 자식 컴포넌트에게 해당 데이터를 props로 넘겨 주고 있다.
  // return <Page isDark={isDark} setIsDark={setIsDark}/>

  return (
    <ThemeContext.Provider value={{isDark, setIsDark}}>
      <Page/>
    </ThemeContext.Provider>
  )

}

export default App;
