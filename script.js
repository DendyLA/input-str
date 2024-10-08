const search = document.querySelectorAll('.search__info');

const dropdownButtonFirst = document.querySelector('.dropdown__button_first');
const dropdownButtonSecond = document.querySelector('.dropdown__button_second');
const dropdownMenuFirst = document.querySelector('.dropdown__menu_first');
const dropdownMenuSecond = document.querySelector('.dropdown__menu_second');

const commision = document.querySelector('.commision span');
const commisionUpper = document.querySelector('.commision__upper span');
const commisionInfo = document.querySelector('.commision__info');

// const link = document.querySelector('.button__link');

const totalElem = document.querySelector('.all span')
// const dropdownButtonThird = document.querySelector('.dropdown__button_third');
// const dropdownMenuThird = document.querySelector('.dropdown__menu_third');

// const dropdownButtonFourth = document.querySelector('.dropdown__button_fourth');
// const dropdownMenuFourth = document.querySelector('.dropdown__menu_fourth');

// const dropdownButtonFifth = document.querySelector('.dropdown__button_fifth');
// const dropdownMenuFifth = document.querySelector('.dropdown__menu_fifth');

const message = document.querySelectorAll('.message');
//items
const dropdownItemFirst = document.querySelectorAll('.dropdown-item_first');
const dropdownItemSecond = document.querySelectorAll('.dropdown-item_second');
const dropdownItemThird = document.querySelectorAll('.dropdown-item_third');
const dropdownItemFourth = document.querySelectorAll('.dropdown-item_fourth');
const dropdownItemFifth = document.querySelectorAll('.dropdown-item_fourth');
//button
const buttonSubmit = document.querySelector('#button__submit');
//inputs
const sendInput = document.querySelector('#send');
const takeInput = document.querySelector('#take');

const dollar = document.querySelector('#dollar');
const rub = document.querySelector('#rub');

const searchFirst = document.querySelector('.search__first');
const searchInputFirst = document.querySelector('.search__input_first')

const searchSecond = document.querySelector('.search__second');
const searchInputSecond = document.querySelector('.search__input_second')

//inputs
function formatNumber(number) {
	return  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
function removeSpaces(str) {
	return str.replace(/\s+/g, '');
}
// Устанавливаем начальное значение для takeInput
// sendInput.value = formatNumber(10000);
// sendInput.addEventListener('blur', function(e) {
// 	const value = e.target.value;

// 	if (value < 10000) {
// 		e.target.value = '10000';
// 		message[0].classList.remove('hide')
// 		message[0].textContent = 'Введите число больше или равно 10000';
// 	} else {
// 		// Форматируем число и выполняем другие действия
// 		message[0].classList.add('hide')
// 		e.target.value = formatNumber(e.target.value);
// 		message[0].textContent = message[1].textContent;
// 	}
// });
//search

searchInputFirst.addEventListener('input', () => {
	const searchText = searchInputFirst.value.toLowerCase();
	
	dropdownItemFirst.forEach(item => {
		let countryName = item.querySelector('.country__name').textContent.toLowerCase();
		let itemText = item.lastChild.textContent.toLowerCase();
		countryName = countryName.trim()
		itemText = itemText.trim()
		const isMatch = itemText.includes(searchText) || countryName.includes(searchText);
		
		
		if (isMatch) {
            item.classList.remove('hide');
			console.log('a')
        } else {
            item.classList.add('hide');
			console.log('b')
        }
	});
});

searchInputSecond.addEventListener('input', () => {
	const searchText = searchInputSecond.value.toLowerCase();
	
	dropdownItemSecond.forEach(item => {
		let countryName = item.querySelector('.country__name').textContent.toLowerCase();
		let itemText = item.lastChild.textContent.toLowerCase();
		countryName = countryName.trim()
		itemText = itemText.trim()
		const isMatch = itemText.includes(searchText) || countryName.includes(searchText);
		
		
		if (isMatch) {
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
	});
});


//go to other page for submit
function redirectToNewPage(e) {
	e.preventDefault();
	const currency = dropdownButtonFirst.innerText.trim();
	if(sendInput.value == '' || takeInput.value == '' || currency == 'Выберите...'){
		for(let i of message){
			i.classList.remove('hide');
		}
	}else{
		window.location.href = "pages/contactRub/contact.html"; 
	}
	
    
}
buttonSubmit.addEventListener('click', redirectToNewPage);
//first
for(let i of dropdownMenuFirst.children){
	i.addEventListener('click', (e) => {
		e.preventDefault();
		if(e.target.tagName === 'A'){
			if(e.target === searchFirst || e.target === searchInputFirst){
				return
			}else{
				dropdownButtonFirst.innerHTML = e.target.innerHTML;
			}
		}else{
			if(e.target === searchFirst || e.target === searchInputFirst){
				return
			}else{
				dropdownButtonFirst.innerHTML = e.target.parentElement.innerHTML;
			}
		}

		searchInputFirst.value = '';
		dropdownItemFirst.forEach(item => {
			item.classList.remove('hide');
		})
		if(dropdownButtonFirst.innerHTML === dropdownButtonSecond.innerHTML){
			if(dropdownButtonSecond.innerHTML === dollar.innerHTML){
				dropdownButtonSecond.innerHTML = rub.innerHTML;
			}else{
				//random
				// const randomIndex = Math.floor(Math.random() * dropdownItemSecond.length);
				// dropdownButtonSecond.innerHTML = dropdownItemSecond[randomIndex].innerHTML; 
				dropdownButtonSecond.innerHTML = dollar.innerHTML;
			}
		}
		sendInput.value = '';
		takeInput.value = '';
	})
}
//second
for(let i of dropdownMenuSecond.children){
	i.addEventListener('click', (e) => {
		e.preventDefault();
		// console.log(dropdownButtonSecond);	
		if(e.target.tagName === 'A'){
			if(e.target === searchSecond || e.target === searchInputSecond){
				return
			}else{
				dropdownButtonSecond.innerHTML = e.target.innerHTML;
			}
			
		}else{
			if(e.target === searchSecond || e.target === searchInputSecond){
				return
			}else{
				dropdownButtonSecond.innerHTML = e.target.parentElement.innerHTML
			}
			
		}
		searchInputSecond.value = '';
		dropdownItemSecond.forEach(item => {
			item.classList.remove('hide');
		})
		if(dropdownButtonSecond.innerHTML === dropdownButtonFirst.innerHTML){
			if(dropdownButtonFirst.innerHTML === dollar.innerHTML){
				dropdownButtonFirst.innerHTML = rub.innerHTML;
			}else{
				//random
				// const randomIndex = Math.floor(Math.random() * dropdownItemFirst.length);
				// dropdownButtonFirst.innerHTML = dropdownItemFirst[randomIndex].innerHTML; 
				dropdownButtonFirst.innerHTML = dollar.innerHTML;
			}
		}
		sendInput.value = '';
		takeInput.value = '';
	})
}

//third
// dropdownButtonThird.innerHTML = 'Выбрать';
// for(let i of dropdownMenuThird.children){
// 	i.addEventListener('click', (e) => {
// 		e.preventDefault();
// 		if(e.target.tagName === 'A'){
// 			dropdownButtonThird.innerHTML = e.target.innerHTML;
// 		}else if(e.target === search[1]){
// 			return
// 		}else{
// 			dropdownButtonThird.innerHTML = e.target.parentElement.innerHTML;
// 		}
// 	})
// }
// dropdownButtonFourth.innerHTML = 'Выбрать';
// //fourth
// for(let i of dropdownMenuFourth.children){
// 	i.addEventListener('click', (e) => {
// 		e.preventDefault();
// 		if(e.target.tagName === 'A'){
// 			dropdownButtonFourth.innerHTML = e.target.innerHTML;
// 		}else if(e.target === search[0]){
// 			return
// 		}else{
// 			dropdownButtonFourth.innerHTML = e.target.parentElement.innerHTML;
// 		}
// 	})
// }
// //fifth
// dropdownButtonFifth.innerHTML = 'Выбрать';
// for(let i of dropdownMenuFifth.children){
// 	i.addEventListener('click', (e) => {
// 		e.preventDefault();
// 		if(e.target.tagName === 'A'){
// 			dropdownButtonFifth.innerHTML = e.target.innerHTML;
// 		}else if(e.target === search[2]){
// 			return
// 		}else{
// 			dropdownButtonFifth.innerHTML = e.target.parentElement.innerHTML;
// 		}
// 	})
// }

//take data !!!!!!!!!!!!!!!!!!!!!!!!!!!!
// async function getExchange(currency){
// 	const getData = `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`;
// 	try{
// 		const res = await fetch(getData);
// 		if(!res.ok){
// 			throw new Error(`Response status: ${res.status}`)
// 		}
// 		const data = await res.json();
// 		return data[currency]
// 	}catch(error){
// 		console.error(error.message);
// 	}

// }

async function getExchange(from, to){
	const crypto = `https://api.coinbase.com/v2/prices/${from}-${to}/spot`
	const getData = `https://api.tinkoff.ru/v1/currency_rates?from=${from}&to=${to}`;
	if(from === 'BTC' || from === 'USDT' || to === 'BTC' || to === 'USDT'){
		try{
			const res = await fetch(crypto);
			if(!res.ok){
				throw new Error(`Response status: ${res.status}`)
			}
			const data = await res.json();
			const final = data;
			return final.data.amount
		}catch(error){
			console.error(error.message);
		}
	}else{
		try{
			const res = await fetch(getData);
			if(!res.ok){
				throw new Error(`Response status: ${res.status}`)
			}
			const data = await res.json();
			const final = data.payload.rates[0].buy;
			return final
		}catch(error){
			console.error(error.message);
		}
	}
	

}

// calculate input-event
let firstToSecondExchange = 0;
async function calculateSend(e){
	//take data from formul
	let formulData = null;
	await fetch('/input/pages/formulManage/getFormul.php')
    .then(response => response.json()) // Преобразуем ответ в формат JSON
    .then(data => {
       formulData = data; // Выводим данные в консоль
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
	const currency = dropdownButtonFirst.innerText.trim();
	const takeCurrency = dropdownButtonSecond.innerText.trim();
	const data = await getExchange(currency, takeCurrency);
	if(currency == 'Выберите...'){
		for(let i of message){
			i.classList.remove('hide');
		}
	}else{
		for(let i of message){
			i.classList.add('hide');
		}
	}
	let val = removeSpaces(e.target.value)
	const exchangeCount = data;
	//formul for the input field currency and precent
	
	let formul = formulData.a * parseInt(val) / formulData.b * formulData.c * formulData.d * formulData.e - (formulData.f - formulData.g) * exchangeCount / formulData.h;
	
	const percent = parseInt(val) - formul;
	let finalData = formul;
	finalData = finalData * exchangeCount;

	commision.innerHTML = formatNumber(percent.toFixed());
	commision.parentElement.lastChild.nodeValue = ' '+ currency;
	totalElem.innerHTML = formatNumber(parseInt(val) + parseInt(percent.toFixed()));
	totalElem.parentElement.lastChild.nodeValue = ' '+ currency;
	// finalData = finalData - parseInt(percent);
	

	if(dropdownButtonSecond.innerText == 'BTC'){
		takeInput.value = formatNumber(finalData.toFixed(5));
	}else{
		takeInput.value = formatNumber(finalData.toFixed(2));
	}

	//final data or takeInput ==NaN
	if(takeInput.value  === 'NaN'){
		takeInput.value = '';
		for(let i of message){
			i.classList.remove('hide');
		}
	}

	e.target.value = formatNumber(e.target.value);

	firstToSecondExchange = exchangeCount;
	window.localStorage.setItem('formul', formul);
	window.localStorage.setItem('exchange', parseFloat(firstToSecondExchange));
	window.localStorage.setItem('sendCurrency', dropdownButtonFirst.innerText.trim());
	window.localStorage.setItem('takeCurrency', dropdownButtonSecond.innerText.trim());
	window.localStorage.setItem('commision', percent);
	window.localStorage.setItem('take', takeInput.value);
	window.localStorage.setItem('total', parseInt(removeSpaces(totalElem.innerHTML) ))

	//send user to current page
	
}

sendInput.addEventListener('input', calculateSend);

async function calculateTake(e){
	//take data from formul
	let formulData = null;
	await fetch('/input/pages/formulManage/getFormul.php')
    .then(response => response.json()) // Преобразуем ответ в формат JSON
    .then(data => {
       formulData = data; // Выводим данные в консоль
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
	const currency = dropdownButtonSecond.innerText.trim();
	const sendCurrency = dropdownButtonFirst.innerText.trim();
	const data = await getExchange(sendCurrency, currency);
	const dataRev = await getExchange(currency, sendCurrency)
	if(currency == 'Выберите...'){
		for(let i of message){
			i.classList.remove('hide');
		}
	}else{
		for(let i of message){
			i.classList.add('hide');
		}
	}
	let val = removeSpaces(e.target.value) * dataRev;
	const exchangeCount = data;

	//formul for the input field currency and precent
	let formul = formulData.a * parseInt(val) / formulData.b * formulData.c * formulData.d * formulData.e - (formulData.f - formulData.g) * exchangeCount / formulData.h;
	
	const percent = parseInt(val) - formul;
	let finalData = formul ;

	commision.innerHTML = formatNumber(percent.toFixed());
	commision.parentElement.lastChild.nodeValue = ' '+ sendCurrency;
	totalElem.innerHTML = formatNumber(parseInt(removeSpaces(sendInput.value)) + parseInt(percent.toFixed()));
	totalElem.parentElement.lastChild.nodeValue = ' '+ sendCurrency;
	// finalData = finalData + parseInt(percent);

	if(dropdownButtonFirst.innerText == 'BTC'){
		sendInput.value = finalData.toFixed(5);
	}else{
		sendInput.value = formatNumber(finalData.toFixed(2));
	}
	
	
	if(sendInput.value === 'NaN'){
		sendInput.value = '';
		for(let i of message){
			i.classList.remove('hide');
		}
	}
	e.target.value = formatNumber(e.target.value);

	window.localStorage.setItem('formul', formul);
	window.localStorage.setItem('exchange', parseFloat(firstToSecondExchange));
	window.localStorage.setItem('sendCurrency', dropdownButtonFirst.innerText.trim());
	window.localStorage.setItem('takeCurrency', dropdownButtonSecond.innerText.trim());
	window.localStorage.setItem('commision', percent);
	window.localStorage.setItem('take', takeInput.value);
	window.localStorage.setItem('total', parseInt(removeSpaces(totalElem.innerHTML)))

	//send user to current page
	
}

takeInput.addEventListener('input', calculateTake);



//reload page
window.onload = async function() {
	//take data from formul
	let formulData = null;
	await fetch('/input/pages/formulManage/getFormul.php')
    .then(response => response.json()) // Преобразуем ответ в формат JSON
    .then(data => {
       formulData = data; // Выводим данные в консоль
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
	//layout frist input
	dropdownButtonFirst.innerHTML = rub.innerHTML;
	dropdownButtonSecond.innerHTML = dollar.innerHTML;
	//layout end
	sendInput.value = '10 000';
	takeInput.value = '';

	const currency = dropdownButtonFirst.innerText.trim();
	const takeCurrency = dropdownButtonSecond.innerText.trim();
	const data = await getExchange(currency, takeCurrency);
	if(currency == 'Выберите...'){
		for(let i of message){
			i.classList.remove('hide');
		}
	}else{
		for(let i of message){
			i.classList.add('hide');
		}
	}
	let val = removeSpaces(sendInput.value)
	const exchangeCount = data;
	//formul for the input field currency and precent
	//{0001}х{API:RUB/{0002}}х{0003}х{0004}х{0005}-({0006}-{0007})х{API:USD/{0008}}
	
	let formul = formulData.a * parseInt(val) / formulData.b * formulData.c * formulData.d * formulData.e - (formulData.f - formulData.g) * exchangeCount / formulData.h;
	
	const percent = parseInt(val) - formul;
	let finalData = formul;
	finalData = finalData * exchangeCount;
	
	commision.innerHTML = formatNumber(percent.toFixed());
	commision.parentElement.lastChild.nodeValue = ' '+ currency;
	totalElem.innerHTML = formatNumber(parseInt(val) + parseInt(percent.toFixed()));
	totalElem.parentElement.lastChild.nodeValue = ' '+currency;
	// finalData = finalData - parseInt(percent);

	takeInput.value = formatNumber(finalData.toFixed(2));
	//final data or takeInput ==NaN
	if(takeInput.value  === 'NaN'){
		takeInput.value = '';
		for(let i of message){
			i.classList.remove('hide');
		}
	}

	sendInput.value = formatNumber(sendInput.value);

	firstToSecondExchange = exchangeCount;
	window.localStorage.setItem('formul', formul);
	window.localStorage.setItem('exchange', parseFloat(firstToSecondExchange));
	window.localStorage.setItem('sendCurrency', dropdownButtonFirst.innerText.trim());
	window.localStorage.setItem('takeCurrency', dropdownButtonSecond.innerText.trim());
	window.localStorage.setItem('commision', percent);
	window.localStorage.setItem('take', takeInput.value);
	window.localStorage.setItem('total', parseInt(removeSpaces(totalElem.innerHTML)))

	//send user to current page

	
	

};


//commision info

commisionUpper.addEventListener('mouseenter', (e) => {
	commisionInfo.classList.remove('hide')
})

commisionUpper.addEventListener('mouseleave', (e) => {
	commisionInfo.classList.add('hide')
})

commisionUpper.addEventListener('touchstart', (e) => {
	commisionInfo.classList.remove('hide')
})

commisionUpper.addEventListener('touchend', (e) => {
	commisionInfo.classList.add('hide')
})
