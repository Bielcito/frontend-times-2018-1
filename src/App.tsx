import * as React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './container/home';
// import Navbar from './ui/Navbar';
// import Jumbotron from './ui/Jumbotron';
// import Carousel from './ui/Carousel';

// import logo from './logo.svg';

class App extends React.Component {
	public render() {
		return (
			<div className="container-fluid">
				<Route path="/" component={Home}/>
			</div>
		);
	}
}

export default App;
