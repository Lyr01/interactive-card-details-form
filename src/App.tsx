import { useState } from "react";
import "./App.css";
import CompletedState from "./components/CompletedState";
import InputController from "./components/InputController";

import backCard from "./images/bg-card-back.png";
import frontCard from "./images/bg-card-front.png";
import logoCard from "./images/card-logo.svg";

function App() {
	const [cardNumber, setCardNumber] = useState("");
	const [cardName, setCardName] = useState("");
	const [cardMonth, setCardMonth] = useState("");
	const [cardYear, setCardYear] = useState("");
	const [cardCvc, setCardCvc] = useState("");
	const [showFinalState, setShowFinalState] = useState(false);

	return (
		<div className="App">
			<main>
				<div className="container">
					<div className="left_section">
						<div className="cards">
							<div className="front_card">
								<img src={logoCard} alt="card-logo" className="card_logo" />
								<div className="front_card_container">
									<img
										src={frontCard}
										alt="front-card"
										className="front_card_img"
									/>
									<span className="card_number">
										{cardNumber
											? cardNumber.replace(/\w{4}(?=.)/g, "$& ")
											: "0000 0000 0000 0000"}
									</span>
									<div className="card_info">
										<span>{cardName ? cardName : "Jane Appleseed"}</span>
										<span>
											<span>{cardMonth ? cardMonth : "00"}</span>/
											<span>{cardYear ? cardYear : "00"}</span>
										</span>
									</div>
								</div>
							</div>
							<div className="back_card">
								<img src={backCard} alt="back-card" className="back_card_img" />
								<span className="cvc">{cardCvc ? cardCvc : "000"}</span>
							</div>
						</div>
					</div>
					{showFinalState ? (
						<CompletedState />
					) : (
						<InputController
							setCardNumber={setCardNumber}
							cardNumber={cardNumber}
							setCardName={setCardName}
							cardName={cardName}
							setCardMonth={setCardMonth}
							cardMonth={cardMonth}
							setCardYear={setCardYear}
							cardYear={cardYear}
							setCardCvc={setCardCvc}
							cardCvc={cardCvc}
							setShowFinalState={setShowFinalState}
						/>
					)}
				</div>
			</main>
			<div className="attribution">
				Challenge by{" "}
				<a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
					Frontend Mentor
				</a>
				. Coded by <a href="https://lyr01.github.io/">Hamza Khan</a>.
			</div>
		</div>
	);
}

export default App;
