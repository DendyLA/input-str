const totalNumber = document.querySelector('.header__send');
const currency = document.querySelector('.header__send span');

const dateElem = document.querySelector('.header__date');

function formatNumber(number) {
	return  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const minutesStr = minutes < 10 ? '0'+minutes : minutes;
    const currentTime = hours + ':' + minutesStr + ' ' + ampm;
    return currentTime;
}

window.onload = function(){
    totalNumber.firstChild.nodeValue = formatNumber(window.localStorage.getItem('total')) + ' ';
    currency.innerHTML = window.localStorage.getItem('sendCurrency');

    dateElem.innerHTML = getCurrentTime();
}