
const dropdownButtonFirst = document.querySelector('.dropdown__button_first');
const dropdownButtonSecond = document.querySelector('.dropdown__button_second');
const dropdownMenuFirst = document.querySelector('.dropdown__menu_first');
const dropdownMenuSecond = document.querySelector('.dropdown__menu_second');
const message = document.querySelectorAll('.message');

//button
const buttonSubmit = document.querySelector('#button__submit');
//inputs
const sendInput = document.querySelector('#send');
const takeInput = document.querySelector('#take');

const dollar = document.querySelector('#dollar');
const euro = document.querySelector('#euro')

//reload page
window.onload = function() {
	sendInput.value = '';
	takeInput.value = '';
};

//go to other page for submit
function redirectToNewPage(e) {
	e.preventDefault();
	const currency = dropdownButtonFirst.innerText.trim();
	if(sendInput.value == '' || takeInput.value == '' || currency == 'Выберите...'){
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
		if(e.target.tagName === 'A'){
			dropdownButtonFirst.innerHTML = e.target.innerHTML;
		}else{
			dropdownButtonFirst.innerHTML = e.target.parentElement.innerHTML
		}


		if(dropdownButtonFirst.innerHTML === dropdownButtonSecond.innerHTML){
			if(dropdownButtonSecond.innerHTML === dollar.innerHTML){
				dropdownButtonSecond.innerHTML = euro.innerHTML;
			}else{
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
		// console.log(dropdownButtonSecond);	
		if(e.target.tagName === 'A'){
			dropdownButtonSecond.innerHTML = e.target.innerHTML;
		}else{
			dropdownButtonSecond.innerHTML = e.target.parentElement.innerHTML
		}

		if(dropdownButtonSecond.innerHTML === dropdownButtonFirst.innerHTML){
			if(dropdownButtonFirst.innerHTML === dollar.innerHTML){
				dropdownButtonFirst.innerHTML = euro.innerHTML;
			}else{
				dropdownButtonFirst.innerHTML = dollar.innerHTML;
			}
		}
		sendInput.value = '';
		takeInput.value = '';
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
	
	const exchangeCount = data[takeCurrency.toLowerCase()]

	let finalData = e.target.value * exchangeCount
	const percent = finalData * 0.1;

	finalData = finalData - percent;
	takeInput.value = finalData.toFixed(2);

	if(takeInput.value === 'NaN'){
		takeInput.value = '';
		for(let i of message){
			i.classList.remove('hide');
		}
	}
	
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

	const exchangeCount = data[sendCurrency.toLowerCase()]
	let finalData = e.target.value * exchangeCount

	const percent = finalData * 0.1;
	
	finalData = finalData + percent;
	sendInput.value = finalData.toFixed(2);
	if(sendInput.value === 'NaN'){
		sendInput.value = '';
		for(let i of message){
			i.classList.remove('hide');
		}
	}
}

takeInput.addEventListener('input', calculateTake);



