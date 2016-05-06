import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BankBalanceStore from './BankBalanceReduceStore';
import BankActions from './BankActions';
import {Container} from 'flux/utils';

export class App extends Component {
	constructor() {
		super(...arguments);
		BankActions.createAccount();
	}

	deposit() {
		BankActions.depositIntoAccount(Number(this.refs.amount.value));
		this.refs.amount.value = '';
	}

	withdraw() {
		BankActions.withdrawFromAccount(Number(this.refs.amount.value));
		this.refs.amount.value = '';
	}

	render() {
		return (
			<div>
				<header>FluxTrust Bank</header>
				<h1>Your balance is ${(this.state.balance).toFixed(2)}</h1>
				<div className="atm">
					<input type="text" placeholder="enter amount" ref="amount" />
					<br />
					<button onClick={this.withdraw.bind(this)}>Withdraw</button>
					<button onClick={this.deposit.bind(this)}>Deposit</button>
				</div>
			</div>
		);
	}
}

App.getStores = () => ([BankBalanceStore]);
App.calculateState = (prevState) => ({balance: BankBalanceStore.getState()});

let AppContainer = Container.create(App);

ReactDOM.render(<AppContainer />, document.getElementById('root'));