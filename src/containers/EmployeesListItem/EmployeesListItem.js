import { Component } from 'react';
import './EmployeesListItem.css';

class EmployeesListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentSalary: ''
		}
	}

	onChangeSalary = (e) => {
		const changedSalary = e.target.value.slice(0, -1); // We use the slice method so that the dollar sign is not written in state.
		this.setState({
			currentSalary: changedSalary
		});
		this.props.onChangeSalary(this.props.name, changedSalary);
	}

	render() {
		const { name, salary, increase, rise, onDeleteItem, onToggleProp } = this.props;

		let classNames = "list-group-item d-flex justify-content-between";
		if (increase) {
			classNames += ' increase';
		}
		if (rise) {
			classNames += ' like';
		}

		return (
			<li className={classNames}>
				<span className="list-group-item-label" onClick={onToggleProp} data-toggle="rise">{name}</span>
				<input type="text"
					className="list-group-item-input"
					value={salary + '$'}
					onChange={this.onChangeSalary} />
				<div className='d-flex justify-content-center align-items-center'>
					<button type="button"
						className="btn-cookie btn-sm "
						onClick={onToggleProp}
						data-toggle="increase">
						<i className="fas fa-cookie"></i>
					</button>

					<button type="button"
						className="btn-trash btn-sm "
						onClick={onDeleteItem}>
						<i className="fas fa-trash"></i>
					</button>
					<i className="fas fa-star"></i>
				</div>
			</li>
		)
	}
}

export default EmployeesListItem;