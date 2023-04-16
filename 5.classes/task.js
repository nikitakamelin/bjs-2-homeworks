///! -------------------- Задача 1 -------------------------------------//
class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}
	fix() {
		this.state = this.state * 1.5;
	} 

	set state(newState) {
		if (newState > 100) {
			this._state = 100;
		} else if (newState < 0) {
			this._state = 0;
		} else {
			this._state = newState;
		}
	}
	get state() {
		return this._state;
	}
}
class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}
class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "book";
		this.author = author;
	}
}
class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}
class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}
//!-----------------------------------------------------------------//

///* -------------------- Задача 2 -------------------------------------//

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}
	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}
	findBookBy(type, value) {
		let result = this.books.find((item, index) => item[type] === value);

		if (result) {
			return result;
		} else {
			return null;
		}
	}
	giveBookByName(bookName) {
		let findIndex = this.books.findIndex((item, index) => item.name === bookName);

		if (findIndex !== -1) {
			return this.books.splice(findIndex, 1)[0]; //Ошибка исправлена
		} else {
			return null;
		}
			
	}
}

///* -----------------------------------------------------------------------------//

//? ------------------------------ Задача 3 --------------------------------------//

class Student {
	constructor(name) {
		this.name = name;
		this.marks = {};
		//this.marksArray = [];
	}

	addMark(mark, subject) {
		if (mark < 2 || mark > 5) {
			throw new Error('Невалидное значение оценки')
		}
	
		if (!this.marks.hasOwnProperty(subject))	{
			this.marks[subject] = [];
		}
		this.marks[subject].push(mark);
	}

	getAverageBySubject(subject) {
		if (!this.marks.hasOwnProperty(subject))	{
			return 0;
		}
		return this.marks[subject].reduce((acc, item) => acc + item / this.marks[subject].length, 0);
	}

	getAverage() {
		let sum = 0;
		for (let key of Object.keys(this.marks)) {
			sum =  sum + this.getAverageBySubject(key);
		}
		return sum / Object.keys(this.marks).length;
	}
}

const student = new Student("Олег Никифоров");

student.addMark(4, "химия");
student.addMark(5, "химия");
student.addMark(5, "физика");

///?-----------------------------------------------------------------------------//

// const library = new Library("Библиотека имени Ленина");

// library.addBook(
//  new DetectiveBook(
//    "Артур Конан Дойл",
//    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
//    2019,
//    1008
//  )
// );
// library.addBook(
//  new FantasticBook(
//    "Аркадий и Борис Стругацкие",
//    "Пикник на обочине",
//    1972,
//    168
//  )
// );
// library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
// library.addBook(new Magazine("Мурзилка", 1924, 60));

//console.log(library.giveBookByName("Мурзилка"));
//library.findBookBy("releaseDate", 1924); 







