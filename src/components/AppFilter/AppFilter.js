import "./AppFilter.css";

const AppFilter = ({ filter, onFilterSelect }) => {
	const buttonData = [
		{ name: 'all', label: 'All employees' },
		{ name: 'rise', label: 'To increase' },
		{ name: 'moreThen1000', label: 'Salary more 1000$' },
	];

	const buttons = buttonData.map(({ name, label }) => {
		const active = filter === name;
		const clazz = active ? 'btn-light' : 'btn btn-outline-light';
		return (
			<button type="button"
				className={`btn ${clazz}`}
				key={name}
				onClick={() => onFilterSelect(name)}>
				{label}
			</button>
		)
	});

	return (
		<div className="btn-group">
			{buttons}
		</div>
	)
}

export default AppFilter;
