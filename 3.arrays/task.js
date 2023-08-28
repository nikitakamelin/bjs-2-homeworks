function compareArrays(arr1, arr2) {
	return arr1.length == arr2.length ?
		arr1.every((item, index) => item === arr2[index]): 
		false;
}

// среднее значение возраста пользователей одного пола.
function getUsersNamesInAgeRange(users, gender) {
	let arr = users.filter(user => user.gender === gender).map(item => item.age);
	return arr.reduce((acc, current) => (acc + current/arr.length), 0)
}

 