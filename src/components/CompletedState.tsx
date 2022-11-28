import completeIcon from "../images/icon-complete.svg";
import "./InputController.css";

const CompletedState = () => {
	return (
		<div className="final_state">
			<img src={completeIcon} alt="completed icon" />
			<h1>Thank you!</h1>
			<p> We've added your card details</p>
			<div className="btn_container">
				<button onClick={() => window.location.reload()}>Continue</button>
			</div>
		</div>
	);
};

export default CompletedState;
