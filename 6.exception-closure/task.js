//*--------------------- Задача 1 ---------------------------------//
function parseCount(num) {
	if (Number.isNaN(Number.parseFloat(num))) {
		throw new Error("Невалидное значение");
	}

	return Number.parseFloat(num); 
}
function validateCount(num) {
	try {
		return parseCount(num);
	} catch(error) {
		return error;
	} 
}
//!--------------------- Задача 2 ---------------------------------//
class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;

		if (this.a + this.b < this.c || this.a + this.c < this.b || this.c + this.b < this.a) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
	}
	get perimeter() {
		return this.a + this.b + this.c;
	}
	get area() {
		let p = this.perimeter/2;

		return +Math.sqrt(p*(p - this.a)*(p - this.b)*(p - this.c)).toFixed(3);
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch(error) {
		return {
			get perimeter() {
				return 'Ошибка! Треугольник не существует';
			},
			get area() {
				return 'Ошибка! Треугольник не существует';
			}
		};
	} 
}

//console.log(getTriangle(20, 5, 5));
