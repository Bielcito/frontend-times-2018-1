import * as React from 'react';

export interface BotaoProps {
	text: string;
}

export class Botao extends React.Component<BotaoProps> {
	render() {
		return (
			<button>{this.props.text}</button>
		);
	}
}