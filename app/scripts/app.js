/** @jsx React.DOM */
(function (g) {
	'use strict';
	g.define([], function () {
		return g.React.createClass({
			getInitialState: function() {
				return {message: 'Hello World!'};
			},
			goodbye: function() {
				this.setState({message: 'Goodbye World.'});
			},
			render: function() {
				return (
					g.React.DOM.h1( {onClick:this.goodbye}, this.state.message)
				);
			}
		});
	});
}) (this);
