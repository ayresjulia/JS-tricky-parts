function createAccount (pin, amount = 0) {
	return {
		checkBalance (inputPin) {
			return inputPin === pin ? `$${amount}` : "Invalid PIN.";
		},
		deposit (inputPin, depositAmt) {
			return inputPin === pin
				? `Succesfully deposited $${depositAmt}. Current balance: $${(amount += depositAmt)}.`
				: "Invalid PIN.";
		},
		withdraw (inputPin, withdrawalAmt) {
			if (amount < withdrawalAmt) {
				return "Withdrawal amount exceeds account balance. Transaction cancelled.";
			} else if (amount >= withdrawalAmt && inputPin === pin) {
				return `Succesfully withdrew $${withdrawalAmt}. Current balance: $${(amount -= withdrawalAmt)}.`;
			} else {
				return "Invalid PIN.";
			}
		},
		changePin (oldPin, newPin) {
			if (oldPin === pin) {
				pin = newPin;
				return "PIN successfully changed!";
			} else {
				return "Invalid PIN.";
			}
		}
	};
}

module.exports = { createAccount };
