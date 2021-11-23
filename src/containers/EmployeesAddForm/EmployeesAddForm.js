import { Component } from 'react';
import './EmployeesAddForm.css';

class EmployeesAddForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			salary: '',
			errorMessage: ''
		}
	}

	onValueChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	onSubmit = (e) => {
		e.preventDefault();
		const {name, salary} = this.state;

		if (name.length < 3 || !salary) {
			this.setState({
				errorMessage: 'Please fill in all fields.'
			});
			return;
		} 
		else if (name.length > 3 || salary) {
			this.setState({
				errorMessage: ''
			});
		}

		this.props.onAddItem(name, salary);
		this.setState({
			name: '',
			salary: ''
		});
	}

	render() {
		const {name, salary, errorMessage} = this.state;

		return (
			<div className="app-add-form">
				<h3>Add a new employee</h3>
				<h6 className="error-block">{errorMessage}</h6>
				<form
					className="add-form d-flex"
					onSubmit={this.onSubmit}>
					<input type="text"
						className="form-control new-post-label"
						placeholder="What is his name?" 
						name="name"
						value={name}
						onChange={this.onValueChange} />
					<input type="number"
						className="form-control new-post-label"
						placeholder="Salary in dollars" 
						name="salary"
						value={salary}
						onChange={this.onValueChange} />

					<button type="submit"
						className="btn btn-outline-light"> Add
					</button>
				</form>
			</div>
		)
	}
}

export default EmployeesAddForm;