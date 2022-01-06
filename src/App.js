import React, { useState } from 'react';

function App(props) {
  const [name, setName] = useState('');
  
  const criaComboBox = () => {
    const opcoes = [ "Fulano", "Cicrano" ]
    const comboBoxOpcoes = opcoes.map( opcao => <option>{opcao}</option>)
    
    return (
      <select>
        {comboBoxOpcoes}
      </select>
    )
  }

  const MeuComboBox  = () => criaComboBox()

  return (
    <div className="App">
      <input type="text" onChange={e => setName(e.target.value)}/>
      <p>Hello {name} </p>
      <p>Hello {props.nome} </p>
      <MeuComboBox />
    </div>
  );
}

export default App;
