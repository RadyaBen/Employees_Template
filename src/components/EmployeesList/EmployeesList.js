import EmployeesListItem from "../../containers/EmployeesListItem/EmployeesListItem";

import './EmployeesList.css';

const EmployeesList = ({ data, onDeleteItem, onChangeSalary, onToggleProp }) => {

	const elements = data.map(item => {
		const { id, ...itemProps } = item;

		return (
			<EmployeesListItem
				key={id}
				{...itemProps}
				onDeleteItem={() => onDeleteItem(id)}
				onChangeSalary={onChangeSalary}
				onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))} />
		)
	});

	return (
		<ul className="app-list list-group">
			{elements}
		</ul>
	)
}

export default EmployeesList;