function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

let student1 = new Student("Василиса", "женский", 19);
let student2 = new Student("Артём", "мужской", 25);
let student3 = new Student("Oleg", "мужской", 34);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
	if (this.hasOwnProperty("marks")) {
		this.marks = [...this.marks, ...marksToAdd];
	}
}

Student.prototype.getAverage = function () {
	if (this.hasOwnProperty("marks")) {
		return this.marks.reduce((acc, mark) =>  acc + mark / this.marks.length, 0);
	}
	else {
		return 0;
	}
}

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.subject;
  delete this.marks;
}

