import * as React from 'react';
import './App.css';
import * as Botao from 'Botao';
import Search from 'Input';

import logo from './logo.svg';

class App extends React.Component {
	public render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Olá mundo !</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.tsx</code> and save to reload.<br/>

					<Botao.Botao text={'clique aqui'}/><br/>
					<Search/>
				</p>
			</div>
		);
	}
}

export default App;
