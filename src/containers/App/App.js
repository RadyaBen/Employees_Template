import { Component } from 'react';

import AppInfo from '../../components/AppInfo/AppInfo';
import SearchPanel from '../SearchPanel/SearchPanel';
import AppFilter from '../../components/AppFilter/AppFilter';
import EmployeesList from '../../components/EmployeesList/EmployeesList';
import EmployeesAddForm from '../EmployeesAddForm/EmployeesAddForm';

import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ name: 'John.C', salary: 800, increase: false, rise: false, id: 1 },
				{ name: 'Alex.M', salary: 8000, increase: false, rise: false, id: 2 },
				{ name: 'Carl.W', salary: 5000, increase: false, rise: false, id: 3 }
			],
			term: '',
			filter: 'all'
		}
		this.maxId = 4;
	}

	onAddItem = (name, salary) => {
		const newItem = {
			name,
			salary,
			increase: false,
			rise: false,
			id: this.maxId++
		}
		this.setState(({ data }) => {
			const newArr = [...data, newItem];
			return {
				data: newArr
			}
		});
	}

	onDeleteItem = (id) => {
		this.setState(({ data }) => {
			return {
				data: data.filter(item => item.id !== id)
			}
		});
	}

	onChangeSalary = (name, salary) => {
		this.setState(({ data }) => ({
			data: data.map(item => {
				if (item.name === name) { // Check the item by name
					return { ...item, salary }
				}
				return item;
			})
		}));
	}

	onToggleProp = (id, prop) => {
		this.setState(({ data }) => ({
			data: data.map(item => {
				if (item.id === id) {
					return { ...item, [prop]: !item[prop] }
				} else {
					return item; // Get an array of objects, but with one new changed value 
				}
			})
		}));
	}

	onSearchEmployees = (items, term) => {
		if (term.length === 0) {
			return items;
		}

		return items.filter(item => {
			return item.name.indexOf(term) > -1
		});
	}

	onUpdateSearch = (term) => {
		this.setState({ term });
	}

	filterPost = (items, filter) => {
		switch (filter) {
			case 'rise':
				return items.filter(item => item.rise);
			case 'moreThen1000':
				return items.filter(item => item.salary > 1000)
			default:
				return items;
		}
	}

	onFilterSelect = (filter) => {
		this.setState({ filter });
	}

	render() {
		const { data, term, filter } = this.state;	

		const employees = data.length;
		const increased = data.filter(item => item.increase).length;
		const visibleData = this.filterPost(this.onSearchEmployees(data, term), filter);

		return (
			<div className="app">
				<AppInfo
					employeesNumber={employees}
					increased={increased} />

				<div className="search-panel">
					<SearchPanel onUpdateSearch={this.onUpdateSearch} />
					<AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
				</div>

				<EmployeesList
					data={visibleData}
					onDeleteItem={this.onDeleteItem}
					onChangeSalary={this.onChangeSalary}
					onToggleProp={this.onToggleProp} />

				<EmployeesAddForm
					onAddItem={this.onAddItem} />
			</div>
		);
	}
}

export default App;
