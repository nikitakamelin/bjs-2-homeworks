"use strict"

// ------------- Задача 1 ----------------//
function solveEquation(a, b, c) {
	
	const D = Math.pow(b, 2) - 4*a*c;
	
	let arr = [];

	if (D === 0) {
		arr[0] = -b/(2*a);
	}
	if (D > 0) {
		arr[0] = (-b + Math.sqrt(D))/(2*a);
		arr[1] = (-b - Math.sqrt(D))/(2*a);
	}
	return arr;
}
//console.log(solveEquation(1, -4, -5));
//console.log(solveEquation(1, -6, 9));

//---------------------- Задача 2 ------------------------//
let check = "0check";

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
 
	percent = parseInt(percent);
	contribution = parseInt(contribution);
	amount = parseInt(amount);
	countMonths = parseInt(countMonths);
	
	if (Number.isNaN(percent)) {
		console.log("Проверьте параметр 1");
	} 
	if (isNaN(contribution)) {
		console.log("Проверьте параметр 2");
	}
	if (isNaN(amount)) {
		console.log("Проверьте параметр 3");
	}
	if (isNaN(countMonths)) {
		console.log("Проверьте параметр 4");
	}

	let percentShare = percent/(100*12);
	let mortgageBody = amount - contribution;
	let monthlyPayment =  mortgageBody * (percentShare + (percentShare / ((Math.pow(1 + percentShare, countMonths)) - 1)));
	let totalSum = Number((monthlyPayment * countMonths).toFixed(2));
	
	if (Number.isNaN(totalSum)) {
		return false;
	} else {
		return totalSum;
	}
}
 console.log(calculateTotalMortgage(10, check, 50000, 12));
