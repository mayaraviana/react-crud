import React, { useState } from 'react';

function App(props) {
	const [name, setName] = useState('');

	const criaComboBox = () => {
		const opcoes = ['Fulano', 'Cicrano'];
		const comboBoxOpcoes = opcoes.map((opcao) => <option>{opcao}</option>);

		return <select>{comboBoxOpcoes}</select>;
	};

	const MeuComboBox = () => criaComboBox();

	return (
		<div className="App">
			<input type="text" onChange={(e) => setName(e.target.value)} />
			<p>Hello {name} </p>
			<p>Hello {props.nome} </p>
			<MeuComboBox />
			<div className="d-grid gap-2">
				<button className="btn btn-lg btn-primary" type="button">
					Block button
				</button>
				<button className="btn btn-lg btn-primary" type="button">
					Block button
				</button>
			</div>
		</div>
	);
}

export default App;
