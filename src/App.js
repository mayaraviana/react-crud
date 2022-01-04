import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  return (
    <div className="App">
      <input type="text" onChange={e => setName(e.target.value)}/>
      <p>Hello {name} </p>
    </div>
  );
}

export default App;
