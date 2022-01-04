import React, { useState } from 'react';

function App(props) {
  const [name, setName] = useState('');

  return (
    <div className="App">
      <input type="text" onChange={e => setName(e.target.value)}/>
      <p>Hello {name} </p>
      <p>Hello {props.nome} </p>
    </div>
  );
}

export default App;
