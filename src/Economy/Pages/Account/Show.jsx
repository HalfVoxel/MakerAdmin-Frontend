import React from 'react'

// Backbone
import AccountModel from '../../Models/Account'
import TransactionCollection from '../../Collections/Transaction'

import EconomyAccount from '../../Account'
import Transactions from '../../Transactions'

module.exports = React.createClass({
	getInitialState: function()
	{
		// Load account model
		var account = new AccountModel({
			period: this.props.params.period,
			account_number: this.props.params.id
		});
		account.fetch();

		return {
			account_model: account,
		};
	},

	render: function()
	{
		console.log("Period: " + this.props.params.period);
		return (
			<div>
				<h2>Konto</h2>
				<EconomyAccount model={this.state.account_model} />
				<Transactions type={TransactionCollection} params={{period: this.props.params.period, account: this.props.params.id}} />
			</div>
		);
	},
});