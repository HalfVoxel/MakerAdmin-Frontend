import React from 'react'

// Backbone
import InstructionModel from '../../Models/Instruction'

import EconomyAccountingInstruction from '../../Components/Forms/Instruction'
import { withRouter } from 'react-router'

module.exports = withRouter(React.createClass({
	getInitialState: function()
	{
		var instruction = new InstructionModel({
			period: this.props.params.period,
			instruction_number: this.props.params.instruction_number
		});
		instruction.fetch();

		return {
			model: instruction
		};
	},

	render: function()
	{
		return (<EconomyAccountingInstruction model={this.state.model} route={this.props.route} />);
	}
}));