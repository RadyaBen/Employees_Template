import "./AppInfo.css";

const AppInfo = ({ employeesNumber, increased }) => {
	return (
		<div className="app-info">
			<h1>Employees accounting in the Google company</h1>
			<h2>Total number of employees: {employeesNumber}</h2>
			<h2>The prize will receive: {increased}</h2>
		</div>
	)
}

export default AppInfo;