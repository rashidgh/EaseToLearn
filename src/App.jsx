import React from 'react'
import AppCss from "./App.css"
import Main from './components/Main';
import Context2 from './components/Context';



const App = () => {
  return (
    <div>
      <Context2>
        <Main />
      </Context2>
    </div>
  );
}

export default App