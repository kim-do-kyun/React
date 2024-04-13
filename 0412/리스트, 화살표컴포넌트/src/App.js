import logo from './logo.svg';
//import './App.css';
import React from 'react'
// import Header from './funcComp/Header'
// import Main from './funcComp/Main'
// import Footer from './funcComp/Footer'


import Header from './classComp/Header'
import Main from './classComp/Main'
import Footer from './classComp/Footer'
import MyComponent from './MyComponent';

import FPhotoTExt from './FPhotoText';
import RList from './RList';

// function App() {
//   return (
//     <div>
//       <Header/>
//       <Main/>
//       <Footer/>
//     </div>
//   )
// }

// function App() {
//   return (
//     <div>
//       {/* <MyComponent name ="HTML"/>
//       <MyComponent name ="JavaScript"/>
//       <MyComponent name ="React"/> */}
//       <FPhotoTExt image = "desktop" label = "Desktop"/>
//       <FPhotoTExt image = "notebook" label = "notebook"/>
//       <FPhotoTExt image = "pad" label = "pad"/>
//     </div>
//   )
// }

function App(){
  return (
    <div>
      <RList title="Colors" items="Red,Green,Blue,White" />
    </div>
  )
}

export default App;
