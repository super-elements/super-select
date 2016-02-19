var React = require('react');
var ReactDOM = require('react-dom');
require('reactive-elements',
		'document-register-element',
		'react-input-autosize');

// var Hello = React.createClass({
//   render: function() {
//     return <div>Hello </div>;
//   }
// });
//
var Select = require('react-select');
// React.createClass({
// 	render: function(){
// 	 	return React.createElement(Select);
// 	}
// });

document.registerReact('super-select', Select);
