class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}
	// --------- Добавить будильник --------- //
	addClock(time, callback) {
		// if (time === undefined || time === null ||
		// 	callback === undefined || callback === null) {
		// 	throw new Error('Отсутствуют обязательные аргументы');
		// } 
		if (!time || !callback) {
			throw new Error('Отсутствуют обязательные аргументы');
		} 
		
		if (this.alarmCollection.find(item => item.time === time) !== undefined) {
			console.warn('Уже присутствует звонок на это же время');
		} 
		let alarmItem = {
			callback: callback,
			time: time,
			canCall: true
		}
		this.alarmCollection.push(alarmItem);
	}
	// --------- Удалить будильник --------- //
	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(item => item.time !== time);
	}
	// --------- Вернуть текущее время -------//
	getCurrentFormattedTime() {
		let currentDate = new Date();
		let hours = ("0" + currentDate.getHours()).slice(-2);
		let minutes = ("0" + currentDate.getMinutes()).slice(-2);
		let currentTime = `${hours}:${minutes}`;

		return currentTime;
	}
	// ---------- Запуск будильника ----------//
	start() {
		if (this.intervalId !== null) {
			return;
		} 
		
		let id = setInterval(this.alarmCollection.forEach(item => {
			if (item.time === this.getCurrentFormattedTime() && item.canCall === true) {
				item.canCall = false;
				item.callback();
			}	
		}), 1000);

		this.intervalId = id;
	}
	// ---------- Остановить интервал  ----------//
	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}
	// ---------- Сбросить возможность запуска всех звонков  ----------//
	resetAllCalls() {
		this.alarmCollection.forEach(item => item.canCall = true);
	}
	// ---------- Удалить все звонки ----------//
	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}


// ************************************************
let clock = new AlarmClock();
// let callback = f => f;
// clock.addClock("18:45", callback);
// clock.addClock("16:45", callback);
// clock.addClock("16:45", callback);
// clock.addClock("16:46", callback);

let flagToCall = false;
clock.addClock("21:00", () => flagToCall = true);
