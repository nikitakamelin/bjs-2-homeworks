//*-------------------------------Задача 1---------------------------------------//
function getArrayParams(...arr) {
	
	//-------Подход из пункта 4 ДЗ --------//
	let min = Math.min(...arr);
	let max = Math.max(...arr);
	let sum = arr.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		0
	);
	//-------------------------------------//

	//-------Подход из пункта 3 ДЗ --------//
	// let min = arr[0];
	// let max = arr[0];
	// let sum = 0;

	// for (let i = 0; i < arr.length; i++) {
	// 	if (arr[i + 1] > max) {
	// 		max = arr[i + 1];
	// 	} 
	// 	if (arr[i + 1] < min) {
	// 		min = arr[i + 1];
	// 	} 
	// 	sum = sum + arr[i];
	// }
   //-------------------------------------// 

	let avg = Number((sum/arr.length).toFixed(2));

	return { 
		max,
		min,
		avg
	};
}
//*------------------------------------------------------------------------------//
//*-------------------------------Задача 2---------------------------------------//
function summElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let sum = arr.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		0
	);
	return sum;
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let min = Math.min(...arr);
	let max = Math.max(...arr);

	return max - min;
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let i = 0; i < arr.length; i++) {
		
		arr[i] % 2 === 0 ? sumEvenElement = sumEvenElement + arr[i]: sumOddElement = sumOddElement + arr[i];
		
	}
	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let sumEvenElement = 0;
	let countEvenElement = 0;

	for (let i = 0; i < arr.length; i++) {
		
		if (arr[i] % 2 === 0) {
			sumEvenElement = sumEvenElement + arr[i];
			countEvenElement++;
		}
	}
	return sumEvenElement/countEvenElement;
}
//*------------------------------------------------------------------------------//
//*----------------------------------Задача 3------------------------------------//
const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]]; 

function makeWork (arrOfArr, func) {
	let maxWorkerResult = -Infinity;

	let max = [];

	for (let i = 0; i < arrOfArr.length; i++) {

		max[i] = func(...arrOfArr[i]);

		if (max[i] > maxWorkerResult) {
			maxWorkerResult = max[i];
		}
	}
	return maxWorkerResult;
}
//*------------------------------------------------------------------------------//