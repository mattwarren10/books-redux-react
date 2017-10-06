import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

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

// anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
	// whenever selectBook is called, the result should be passed
	// to all our reducers
	return bindActionCreators({ selectBook: selectBook }, dispatch)
}


// promote BookList from a component to a container - it needs
// to know about his new dispathc method, selectBook. make it
// available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);