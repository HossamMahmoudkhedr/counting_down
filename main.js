const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minElement = document.getElementById('min');
const secElement = document.getElementById('sec');

let done = false;

const futureDate = new Date('2025-06-30');

function printFormat(text) {
	return text < 10 ? `0${text}` : text;
}

function updateCountdown() {
	const now = new Date();
	if (futureDate > now) {
		const timeDifference = futureDate - now;

		const daysRemaining = timeDifference / (1000 * 60 * 60 * 24);

		let hoursFraction = `0.${daysRemaining.toString().split('.')[1] || '0'}`;
		const hoursRemaining = parseFloat(hoursFraction) * 24;

		let minutesFraction = `0.${hoursRemaining.toString().split('.')[1] || '0'}`;
		const minutesRemaining = parseFloat(minutesFraction) * 60;

		let secondsFraction = `0.${
			minutesRemaining.toString().split('.')[1] || '0'
		}`;
		const secondsRemaining = parseFloat(secondsFraction) * 60;

		daysElement.innerText = printFormat(Math.trunc(daysRemaining));
		hoursElement.innerText = printFormat(Math.trunc(hoursRemaining));
		minElement.innerText = printFormat(Math.trunc(minutesRemaining));
		secElement.innerText = printFormat(Math.trunc(secondsRemaining));
	} else {
		done = true;
		clearInterval(counter);
		daysElement.innerText = '00';
		hoursElement.innerText = '00';
		minElement.innerText = '00';
		secElement.innerText = '00';
	}
}

let counter = setInterval(updateCountdown, 1000);
