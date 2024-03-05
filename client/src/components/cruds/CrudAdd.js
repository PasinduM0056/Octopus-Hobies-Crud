import React, { useState } from "react";
import { post } from "axios";
import { useNavigate } from "react-router-dom";

function CrudAdd(props) {
	const initialState = {
		fname: "",
		phone: "",
		email: "",
		hobby: "",
	};
	const [crud, setCrud] = useState(initialState);

	const navigate = useNavigate();

	function handleSubmit(event) {
		event.preventDefault();
		async function postCrud() {
			try {
				const response = await post("/api/cruds/", crud);
				navigate(`/cruds/${response.data._id}`);
			} catch (error) {
				console.log("error", error);
			}
		}
		postCrud();
	}

	function handleChange(event) {
		setCrud({ ...crud, [event.target.name]: event.target.value });
	}

	function handleCancel() {
		navigate("/cruds");
	}

	return (
		<div className="container" style={{ maxWidth: "400px" }}>
			<h1>Add Hobbies</h1>
			<hr />
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label>Name</label>
					<input
						name="fname"
						type="text"
						required
						value={crud.fname}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label>Phone</label>
					<input
						name="phone"
						type="tel"
						pattern="(251)-[0-9]{3}-[0-9]{4}"
						required
						value={crud.phone}
						onChange={handleChange}
						className="form-control"
					/>
					<small>Format: 251-XXX-XXXX</small>
				</div>
				<div className="form-group">
					<label>Email</label>
					<input
						name="email"
						type="email"
						pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
						required
						value={crud.email}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				

				<div className="form-group">
					<label>Hobby</label>
					<textarea
						name="hobby"
						row="10"
						value={crud.hobby}
						onChange={handleChange}
						className="form-control"
					/>
				</div>

				<div className="btn-group">
					<input type="submit" value="Submit" className="btn btn-primary" />
					<button
						type="button"
						onClick={handleCancel}
						className="btn btn-secondary"
					>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
}

export default CrudAdd;
