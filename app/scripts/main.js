/** @jsx React.DOM */

(function(g) {
	'use strict';

	require.config({
		baseUrl: 'scripts',
		paths: {
			react: 'script/react.min'
		},
		shim: {
			react: {
				exports: 'React'
			}
		}
	});

	require(['app'], function (App) {
		// use app here
		g.React.renderComponent(
			new App(null),
			document.getElementById('app')
		);
	});
}) (this);