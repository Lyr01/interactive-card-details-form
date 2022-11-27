import "./InputController.css";

const InputController = () => {
	return (
		<div className="right_section">
			<form>
				<div className="grid_name">
					<label htmlFor="card_name">Cardholder Name</label>
					<input
						type="text"
						className="input_card_name"
						placeholder="e.g. Jane Appleseed"
						name="card_name"
						required
					/>
				</div>

				<div className="grid_number">
					<label htmlFor="card_number">Card Number</label>
					<input
						type="number"
						className="input_card_number"
						placeholder="e.g. 1234 5678 9123 0000"
						name="card_number"
						required
					/>
				</div>

				<div className="grid_info">
					<div className="card_information">
						<div className="flex_inputs">
							<label htmlFor="card_date" className="card_date">
								Exp. Date (MM/YY)
							</label>
							<div className="input_card_month">
								<input
									type="number"
									placeholder="MM"
									name="card_month"
									required
								/>
							</div>

							<div className="input_card_year">
								<input
									type="number"
									placeholder="YY"
									name="input_card_year"
									required
								/>
							</div>
							<label htmlFor="card_cvc" className="card_cvc">
								CVC
							</label>
							<div className="input_card_cvc">
								<input
									type="number"
									placeholder="e.g. 123"
									name="card_cvc"
									required
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="grid_button">
					<button type="submit" className="submit_btn">
						Confirm
					</button>
				</div>
			</form>
		</div>
	);
};

export default InputController;
