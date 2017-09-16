import React, { Component } from 'react';
import { connect } from 'react-redux'

class BookList extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li key={book.title} className="list-group-item">
					{book.title}
				</li>
			);
		});
	}
	render() {
		return (
			<ul className="listgroup col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

// connection between redux and react
function mapStateToProps(state) {
	return {
		books: state.books
	};
}

export default connect(mapStateToProps)(BookList);