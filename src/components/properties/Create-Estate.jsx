import React from "react";

export default class CreateEstate extends React.Component {
	constructor(props) {
		super(props);

		this.onChangeUsername = this.onChangeUsername.bind(this);
		this.onChangeAddress = this.onChangeAddress.bind(this);
		this.onChangeDescription = this.onChangeDescription.bind(this);
		this.onChangeTenant = this.onChangeTenant.bind(this);
		this.onChangeDate = this.onChangeDate.bind(this);

		this.state = {
			username: "",
			address: "",
			description: "",
			tenant: "",
			date: new Date(),
		};
	}

	componentDidMount() {
		this.setState({
			users: ["Reis"],
			username: "Reis",
		});
	}

	onChangeUsername(e) {
		this.setState({
			username: e.target.value,
		});
	}

	onChangeAddress(e) {
		this.setState({
			address: e.target.value,
		});
	}

	onChangeDescription(e) {
		this.setState({
			description: e.target.value,
		});
	}

	onChangeDate(date) {
		this.setState({
			date: date,
		});
	}

	onChangeTenant(e) {
		this.setState({
			tenant: e.target.value,
		});
	}

	onSumbit(e) {
		e.preventDefault();

		const estate = {
			username: this.state.username,
			description: this.state.description,
			address: this.state.address,
			tenant: this.state.tenant,
			date: this.state.date,
		};

		console.log(estate);

		window.location = "/";
	}

	render() {
		return (
			<div>
				<h3>Create New Estate</h3>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label for="uName">Username: </label>
						<select
							ref="userInput"
							required
							id="uName"
							className="form-control"
							value={this.state.username}
							onChange={this.onChangeUsername}
						>
							{this.state.users.map((user) => {
								return (
									<option key={user} value={user}>
										{user}
									</option>
								);
							})}
						</select>
					</div>
					<div className="form-group">
						<label for="addr">Address: </label>
						<input
							type="text"
							required
							id="addr"
							className="form-control"
							value={this.state.address}
							onChange={this.onChangeAddress}
						/>
					</div>
					<div className="form-group">
						<label for="tent">Tenant: </label>
						<input
							type="text"
							id="tent"
							className="form-control"
							value={this.state.tenant}
							onChange={this.onChangeTenant}
						/>
					</div>
					<div className="form-group">
						<label for="desp">Description: </label>
						<input
							type="text"
							required
							id="desp"
							className="form-control"
							value={this.state.description}
							onChange={this.onChangeDescription}
						/>
					</div>
					<div className="form-group">
						<label for="theDate">Date : </label>
						<div>
							<DatePicker
								selected={this.state.date}
								onChange={this.onChangeDate}
							/>
						</div>
					</div>
				</form>
			</div>
		);
	}
}
