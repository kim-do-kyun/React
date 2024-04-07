import './App.css';
import Header from '../src/jsxCode/Header';
import Infos from '../src/jsxCode/Infos';
import Skills from './jsxCode/Skills';
import Contact from './jsxCode/Contact';

function App() {

  const baseStyle = {
      width: "610px",
      padding: "30px",
      margin: "30px" 
  };
  return (
    <div className="App" style = {baseStyle}>
      <Header/>
      <Infos/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
