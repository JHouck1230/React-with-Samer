'use strict';

import React from 'react';

class List extends React.Component {
	render() {
		const Component = this.props.component;
		return (
			<div>
				<ul>
					{this.props.items.map(item => 
						<Component key = {item.id} {...item} removeItem = {this.props.removeItem} />)}
				</ul>
			</div>
		);
	};
};

export default List;