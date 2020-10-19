
window.onload = () => {
let timeMinute = 1 * 5;
const minutesTime = document.querySelector('.minutes');
const secondsTime = document.querySelector('.seconds');
const separator = document.querySelector('.separator');


timer = setInterval(()=>{
	let seconds = timeMinute % 60;
	let minutes = Math.trunc(timeMinute/ 60 % 60);

	if (timeMinute <= 0){
		clearInterval(timer);
		secondsTime.innerHTML = `${Math.trunc(seconds / 10) === 0 ? '0': ''}${seconds}`;
		return;
	}
	minutesTime.innerHTML = `0${minutes}`;
	separator.innerHTML = ':';
	secondsTime.innerHTML = `${Math.trunc(seconds / 10) === 0 ? '0': ''}${seconds}`;
	--timeMinute;
}
, 1000);
}