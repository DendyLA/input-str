
const dropdownButtonFirst = document.querySelector('.dropdown__button_first');
const dropdownButtonSecond = document.querySelector('.dropdown__button_second');
const dropdownMenuFirst = document.querySelector('.dropdown__menu_first');
const dropdownMenuSecond = document.querySelector('.dropdown__menu_second');

const dropdownButtonThird = document.querySelector('.dropdown__button_third');
const dropdownMenuThird = document.querySelector('.dropdown__menu_third');

const dropdownButtonFourth = document.querySelector('.dropdown__button_fourth');
const dropdownMenuFourth = document.querySelector('.dropdown__menu_fourth');

const dropdownButtonFifth = document.querySelector('.dropdown__button_fifth');
const dropdownMenuFifth = document.querySelector('.dropdown__menu_fifth');

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
const euro = document.querySelector('#rub');

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
//reload page
window.onload = function() {
	sendInput.value = '10 000';
	takeInput.value = '';
};

//go to other page for submit
function redirectToNewPage(e) {
	e.preventDefault();
	const currency = dropdownButtonFirst.innerText.trim();
	if(sendInput.value == '' || takeInput.value == '' || currency == 'Выберите...' || dropdownButtonFourth.innerText == 'Выбрать'){
		for(let i of message){
			i.classList.remove('hide');
		}
	}else{
		window.location.href = "pages/contact/contact.html"; 
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
				dropdownButtonSecond.innerHTML = euro.innerHTML;
			}else{
				const randomIndex = Math.floor(Math.random() * dropdownItemSecond.length);
				dropdownButtonSecond.innerHTML = dropdownItemSecond[randomIndex].innerHTML; 
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
				dropdownButtonFirst.innerHTML = euro.innerHTML;
			}else{
				const randomIndex = Math.floor(Math.random() * dropdownItemFirst.length);
				dropdownButtonFirst.innerHTML = dropdownItemFirst[randomIndex].innerHTML; 
			}
		}
		sendInput.value = '';
		takeInput.value = '';
	})
}
//third
dropdownButtonThird.innerHTML = 'Выбрать';
for(let i of dropdownMenuThird.children){
	i.addEventListener('click', (e) => {
		e.preventDefault();
		if(e.target.tagName === 'A'){
			dropdownButtonThird.innerHTML = e.target.innerHTML;
		}else{
			dropdownButtonThird.innerHTML = e.target.parentElement.innerHTML;
		}
	})
}
dropdownButtonFourth.innerHTML = 'Выбрать';
//fourth
for(let i of dropdownMenuFourth.children){
	i.addEventListener('click', (e) => {
		e.preventDefault();
		if(e.target.tagName === 'A'){
			dropdownButtonFourth.innerHTML = e.target.innerHTML;
		}else{
			dropdownButtonFourth.innerHTML = e.target.parentElement.innerHTML;
		}
	})
}
dropdownButtonFifth.innerHTML = 'Выбрать';
for(let i of dropdownMenuFifth.children){
	i.addEventListener('click', (e) => {
		e.preventDefault();
		if(e.target.tagName === 'A'){
			dropdownButtonFifth.innerHTML = e.target.innerHTML;
		}else{
			dropdownButtonFifth.innerHTML = e.target.parentElement.innerHTML;
		}
	})
}

//take data !!!!!!!!!!!!!!!!!!!!!!!!!!!!
async function getExchange(currency){
	const getData = `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`;
	try{
		const res = await fetch(getData);
		if(!res.ok){
			throw new Error(`Response status: ${res.status}`)
		}
		const data = await res.json();
		return data[currency]
	}catch(error){
		console.error(error.message);
	}
	
	
	
}

//calculate input-event

async function calculateSend(e){
	const currency = dropdownButtonFirst.innerText.trim();
	const data = await getExchange(currency.toLowerCase());
	const takeCurrency = dropdownButtonSecond.innerText.trim();
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
	const exchangeCount = data[takeCurrency.toLowerCase()];
	//formul for the input field currency and precent
	
	let finalData = parseInt(val) * exchangeCount
	const percent = finalData * 0.1;
	finalData = finalData - percent;

	takeInput.value = finalData.toFixed(2);
	//final data or takeInput ==NaN
	if(takeInput.value  === 'NaN'){
		takeInput.value = '';
		for(let i of message){
			i.classList.remove('hide');
		}
	}

	e.target.value = formatNumber(e.target.value);
}

sendInput.addEventListener('input', calculateSend);

async function calculateTake(e){
	const currency = dropdownButtonSecond.innerText.trim();
	const data = await getExchange(currency.toLowerCase());
	const sendCurrency = dropdownButtonFirst.innerText.trim();
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
	const exchangeCount = data[sendCurrency.toLowerCase()]

	//formul for the input field currency and precent
	let finalData = parseInt(val) * exchangeCount
	const percent = finalData * 0.1;
	finalData = finalData + percent;

	sendInput.value = finalData.toFixed(2);
	
	if(sendInput.value === 'NaN'){
		sendInput.value = '';
		for(let i of message){
			i.classList.remove('hide');
		}
	}
	e.target.value = formatNumber(e.target.value);
}

takeInput.addEventListener('input', calculateTake);



