import { Component } from 'react';
import './SearchPanel.css';

class SearchPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ''
		}
	}

	onUpdateSearch = (e) => {
		const term = e.target.value;
		this.setState({ term });
		this.props.onUpdateSearch(term);
	}

	render() {
		return (
			<input type="text"
				className="form-control search-input"
				placeholder="Find employees"
				value={this.state.term}
				onChange={this.onUpdateSearch} />
		)
	}
}

export default SearchPanel;