"use strict"

function solveEquation(a, b, c) {
	let result = []
	let discriminant = Math.pow(b, 2) - 4 * a * c;
	if (discriminant === 0) {
		let root = (-b) / (2 * a);
		result.push(root)
	} else if (discriminant > 0) {
		let root1 = ((-b) + Math.sqrt(discriminant)) / (2 * a)
		let root2 = ((-b) - Math.sqrt(discriminant)) / (2 * a)
		result.push(root1, root2)
	}
  return result
}



function calculateTotalMortgage(percent, contribution, amount, monthsQuantity) {
	const monthlyPercent = percent / 100 / 12;
	const loanAmount = amount - contribution;
	const monthlyPayment = loanAmount * (monthlyPercent + (monthlyPercent / (Math.pow(1 + monthlyPercent, monthsQuantity) - 1)));

	const totalPayment = monthlyPayment * monthsQuantity;
	const roundedTotalPayment = Math.round(totalPayment * 100) / 100;
	return roundedTotalPayment;
}

const totalPayment = calculateTotalMortgage(10, 20000, 150000, 12);
console.log(totalPayment);