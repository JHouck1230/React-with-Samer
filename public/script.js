'use strict';

// var List = ({children}) => {
// 	return React.createElement( 'ul', {}, 
// 		books.map(book => React.createElement(Book, book))
// 	);
// };

// //////////////////////////////////////////////////////////
// // All do the same thing

// // var Book = ({name}) => {
// // 	return React.createElement( 'li', {}, name );
// // };

// // var Book = React.createClass({
// // 	render() {
// // 		return React.createElement( 'li', {}, this.props.name );	
// // 	}
// // });

// class Book extends React.Component {
// 	render() {
// 		return React.createElement('li', {}, this.props.name);
// 	}
// }
// //////////////////////////////////////////////////////////

// var books = [
// 	{ id: 1, name: 'Learn React', price: '2999'},
// 	{ id: 1, name: 'Learn Flux', price: '1999'},
// 	{ id: 1, name: 'Learn GraphQL', price: '3999'},
// 	{ id: 1, name: 'Learn Relay', price: '4999'},
// ];

// ReactDOM.render(
// 	React.createElement(List, { books }), 
// 	document.getElementById('react')
// );

setInterval(() => {

	var hello = React.createElement('div', {},
		'Hello React',
		React.createElement('br'),
		`Date is: ${new Date()}`,
		React.createElement('br'),
		React.createElement('input'),
		React.createElement('input', {type: 'checkbox'})
	);

	ReactDOM.render(
		hello,
		document.getElementById('react')
	);

	var jHello = `
		Hello jQuery
		<br />
		Date is: ${new Date()}
		<br />
		<input />
		<input type='checkbox'/>
	`;

	$('#jquery').html(jHello);

}, 1000);
