import * as React from 'react';

export interface SearchProps {
}

export interface SearchState {
	value: string;
}

export default class Search extends React.Component<SearchProps, SearchState> {
	constructor(props: SearchProps) {
		super(props);
		this.state = {
			value: ''
		};

		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
		this.setState({
			value: e.currentTarget.value
		});
	}

	ajax(header: any, url: string, f: Function) {
		f({fullname: 'Gabriel Rocha de Oliveira'});
	}

	render() {

		this.ajax(
			{
				username: 'user10',
				password: '123456'
			}, 
			'591,651,6515,56', 
			(resposta: any) => {
				// this.state({
				// 	nome: resposta.fullname
				// });
			}
		);

		return (
			<input type="text" value={this.state.value} onChange={this.onInputChange}/>
		);
	}
}