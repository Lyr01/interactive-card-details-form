import { useState } from "react";
import "./InputController.css";

interface Props {
	setCardNumber: React.Dispatch<React.SetStateAction<string>>;
	cardNumber: string;
	setCardName: React.Dispatch<React.SetStateAction<string>>;
	cardName: string;
	setCardMonth: React.Dispatch<React.SetStateAction<string>>;
	cardMonth: string;
	setCardYear: React.Dispatch<React.SetStateAction<string>>;
	cardYear: string;
	setCardCvc: React.Dispatch<React.SetStateAction<string>>;
	cardCvc: string;
	setShowFinalState: React.Dispatch<React.SetStateAction<boolean>>;
}

const InputController = ({
	setCardNumber,
	cardNumber,
	setCardName,
	cardName,
	setCardMonth,
	cardMonth,
	setCardYear,
	cardYear,
	setCardCvc,
	cardCvc,
	setShowFinalState,
}: Props) => {
	const [errorNumber, setErrorNumber] = useState(false);
	const [errorMonth, setErrorMonth] = useState(false);
	const [errorYear, setErrorYear] = useState(false);
	const [errorCvc, setErrorCvc] = useState(false);

	const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (
			e.target.value.length <= 30 &&
			e.target.value.length >= 0 &&
			e.target.value.match(/^[A-Za-z ]+$/)
		) {
			setCardName(e.target.value);
		}
	};
	const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.value.length <= 16 && Number(e.target.value) >= 0) {
			setCardNumber(e.target.value);
		}
	};
	const handleChangeMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (
			e.target.value.length <= 2 &&
			Number(e.target.value) >= 0 &&
			Number(e.target.value) <= 12
		) {
			setCardMonth(e.target.value);
		}
	};
	const handleChangeYear = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.value.length <= 2 && Number(e.target.value) >= 0) {
			setCardYear(e.target.value);
		}
	};
	const handleChangeCvc = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.value.length <= 3 && Number(e.target.value) >= 0) {
			setCardCvc(e.target.value);
		}
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		cardNumber.length < 16 ? setErrorNumber(true) : setErrorNumber(false);
		cardMonth ? setErrorMonth(false) : setErrorMonth(true);
		cardYear ? setErrorYear(false) : setErrorYear(true);
		cardCvc ? setErrorCvc(false) : setErrorCvc(true);

		cardNumber.length == 16 && cardMonth && cardYear && cardCvc
			? setShowFinalState(true)
			: setShowFinalState(false);
	};

	return (
		<div className="right_section">
			<form onSubmit={(e) => handleSubmit(e)}>
				<div className="grid_name">
					<label htmlFor="card_name">Cardholder Name</label>
					<input
						type="text"
						className="input_card_name"
						placeholder="e.g. Jane Appleseed"
						name="card_name"
						onChange={(e) => handleChangeName(e)}
						value={cardName}
					/>
				</div>

				<div className="grid_number">
					<label htmlFor="card_number">Card Number</label>
					<input
						type="number"
						className={
							errorNumber
								? "input_card_number error_input"
								: "input_card_number"
						}
						placeholder="e.g. 1234 5678 9123 0000"
						name="card_number"
						onChange={(e) => handleChangeNumber(e)}
						value={cardNumber.substring(0, 16)}
					/>
					<small
						className="error"
						style={{ visibility: errorNumber ? "visible" : "hidden" }}
					>
						Card number too small
					</small>
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
									className={errorMonth ? "error_input" : ""}
									placeholder="MM"
									name="card_month"
									onChange={(e) => handleChangeMonth(e)}
									value={cardMonth.substring(0, 2)}
								/>
							</div>

							<div className="input_card_year">
								<input
									type="number"
									className={errorYear ? "error_input" : ""}
									placeholder="YY"
									name="input_card_year"
									onChange={(e) => handleChangeYear(e)}
									value={cardYear.substring(0, 2)}
								/>
							</div>
							<small
								className="error"
								style={{ visibility: errorMonth ? "visible" : "hidden" }}
							>
								Can't be blank
							</small>
							<label htmlFor="card_cvc" className="card_cvc">
								CVC
							</label>
							<div className="input_card_cvc">
								<input
									type="number"
									className={errorCvc ? "error_input" : ""}
									placeholder="e.g. 123"
									name="card_cvc"
									onChange={(e) => handleChangeCvc(e)}
									value={cardCvc.substring(0, 3)}
								/>
							</div>
							<small
								className="error"
								style={{ visibility: errorYear ? "visible" : "hidden" }}
							>
								Can't be blank
							</small>
							<small
								className="error"
								style={{ visibility: errorCvc ? "visible" : "hidden" }}
							>
								Can't be blank
							</small>
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
