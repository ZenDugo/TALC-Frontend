import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CreateEstate extends React.Component {
	constructor(props) {
		super(props);

		this.onChangeNickname = this.onChangeNickname.bind(this);
		this.onChangeAddress = this.onChangeAddress.bind(this);
		this.onChangeDescription = this.onChangeDescription.bind(this);
		this.onChangeTenant = this.onChangeTenant.bind(this);
		this.onChangeDate = this.onChangeDate.bind(this);

		this.state = {
			nickname: "", //Will need to add uid later
			address: "",
			description: "",
			tenant: [],
			date: new Date(),
		};
	}

	componentDidMount() {
		this.setState({
			tenant: ["Madison"], // Will fill up with dynamic tenants based on landlord account
		});
	}

	onChangeNickname(e) {
		this.setState({
			nickname: e.target.value,
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
			nickname: this.state.nickname,
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
				<h3>Add New Estate</h3>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label for="uName">Property Nickname: </label>
						<input
							type="text"
							id="uName"
							className="form-control"
							value={this.state.nickname}
							onChange={this.onChangeNickname}
						/>
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
						<select
							ref="userInput"
							required
							id="tent"
							className="form-control"
							value={this.state.tenant}
							onChange={this.onChangeTenant}
						>
							{this.state.tenant.map((tenant) => {
								return (
									<option key={tenant} value={tenant}>
										{tenant}
									</option>
								);
							})}
						</select>
					</div>
					<div className="form-group">
						<label for="desp">Description: </label>
						<textarea
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
