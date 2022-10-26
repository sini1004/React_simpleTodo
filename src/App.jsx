import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState();
  return (
    <>
      <input type="text" onChange={(event => console.log(event.target.value))} value={inputValue}/>
      <button>추가</button>
    </>
  );
}

export default App;
