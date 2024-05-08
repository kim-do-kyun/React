import './App.css';
import Header from '../src/jsxCode/Header';
import Infos from '../src/jsxCode/Infos';
import Skills from './jsxCode/Skills';
import Contact from './jsxCode/Contact';
import MultiForm from './jsxCode/MultiForm';

function App() {

  const baseStyle = {
      width: "610px",
      padding: "30px",
      margin: "30px" 
  };
  return (
    <div className="App" style = {baseStyle}>
      <Header/>
      {/* <Counter/> */}
      <Infos/>
      <Skills/>
      <Contact/>
      <MultiForm/>
    </div>
  );
}

export default App;
